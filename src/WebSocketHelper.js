import io from 'socket.io-client';
import { isDefined, isDebugMode, JWT, WebSocketServer, WebSocketPort, RequestHelper } from './index';
import { EventEmitter } from 'events';

/**
 * A Helper Class to abstract away the Lower-Level Socket.IO API to suit calls to the RICADO Gen 4 WebSocket Server
 *
 * @public
 */
class WebSocketHelper
{
    /**
     * An Event Emitter Instance
     * 
     * @private
     * @type {EventEmitter|undefined}
     */
    static _emitter = undefined;

    /**
     * An Array of Subscriptions
     * 
     * @private
     * @type {string[]}
     */
    static _subscriptions = [];

    /**
     * The Socket.IO WebSocket Instance
     * 
     * @private
     * @type {SocketIOClient.Socket|undefined}
     */
    static _socket = undefined;

    /**
     * Initialize
     * 
     * @static
     * @public
     * @package
     */
    static initialize()
    {
        if(isDefined(WebSocketHelper._emitter) != true)
        {
            WebSocketHelper._emitter = new EventEmitter();
        }

        if(isDefined(WebSocketHelper._subscriptions) != true)
        {
            WebSocketHelper._subscriptions = [];
        }
        
        WebSocketHelper._socket = io(WebSocketServer + ':' + WebSocketPort, {
            transports: ['websocket'],
            query: {
                token: JWT
            },
        });

        var onEvent = WebSocketHelper._socket.onevent;
        
        WebSocketHelper._socket.onevent = function (packet) {
            var args = packet.data || [];
            onEvent.call (this, packet);    // original call
            packet.data = ["*"].concat(args);
            onEvent.call(this, packet);      // additional call to catch-all
        };

        WebSocketHelper._socket.on('reconnect_attempt', (attempt) => {
            // Fired every time we attempt to reconnect.
            // `attempt` holds the count of attempts so far

            if(WebSocketHelper._socket === undefined)
            {
                return;
            }

            WebSocketHelper._socket.io.opts.transports = ['websocket'];

            WebSocketHelper._socket.io.opts.query = {
                token: JWT
            };

            WebSocketHelper.log("Attempting to Re-connect. " + attempt + " attempts so far");
        });

        WebSocketHelper._socket.on('connect', () => {
            // Fired when first connected and every subsequent re-connect

            WebSocketHelper.log("Socket Connected");

            if(isDefined(WebSocketHelper._subscriptions))
            {
                WebSocketHelper._subscriptions.forEach((subscription) => {
                    if(WebSocketHelper._socket !== undefined)
                    {
                        WebSocketHelper._socket.emit('subscribe', subscription);
                    }
                });
            }
        });

        WebSocketHelper._socket.on('reconnect', (attempts) => {
            // Fired when a re-connection attempt is successful
            // `attempts` holds the count of attempts to get re-connected
            WebSocketHelper.log("Successfully Re-connected after " + attempts + " attempts");
        });

        WebSocketHelper._socket.on('disconnect', (reason) => {
            // Fired whenever the socket is disconnected
            // The reason will be either server or client
            WebSocketHelper.log("Socket Disconnected! Reason: " + reason, "warning");

            if(reason == 'io server disconnect')
            {
                setTimeout(() => {
                    if(WebSocketHelper._socket !== undefined)
                    {
                        WebSocketHelper._socket.connect();
                    }
                }, 5000);
            }
        });

        WebSocketHelper._socket.on('ping', () => {
            // Fired when a Ping Packet is sent to the server.
            WebSocketHelper.log("~PING~");
        });

        WebSocketHelper._socket.on('pong', (latency) => {
            // Fired when a Pong Packet is received from the Server.
            WebSocketHelper.log("~PONG~ Latency: " + latency + "ms");
        });

        WebSocketHelper._socket.on('unauthorized', (error) => {
            // Fired when the JWT Token was invalid or expired
            WebSocketHelper.log(error);
        });

        WebSocketHelper._socket.on('error', (error) => {
            // Fired when an Error Packet is received from the Server.
            WebSocketHelper.log("Received Error!");
            WebSocketHelper.log(error);
        });
        
        WebSocketHelper._socket.on('*', (event, ...args) => {
            if(WebSocketHelper._emitter === undefined)
            {
                return;
            }

            WebSocketHelper._emitter.emit(event, ...args);
        });
    }

    /**
     * Loggging
     * 
     * @static
     * @private
     * @param {string} message - The Message to Log
     * @param {string} [type] - The Log Type (defaults to log)
     */
    static log(message, type = 'log')
    {
        if(isDebugMode() == true)
        {
            switch(type)
            {
                case 'error':
                    console.error('WebSocket :: ' + message);
                    break;
                
                case 'warn':
                case 'warning':
                    console.warn('WebSocket :: ' + message);
                    break;
                
                case 'log':
                default:
                    console.log('WebSocket :: ' + message);
                    break;
            }
        }
    }

    /**
     * Subscribe to a Site or RTU for Events
     * 
     * @static
     * @public
     * @param {string} [key] - The Site ID or RTU ID Key (e.g. site.2 or rtu.1200)
     */
    static subscribe(key = undefined)
    {
        // TODO: Re-Write as Async (Use a Promise) and set up an "Ack" callback so we know the WebSocket Server has Subscribed us
        
        if(isDefined(WebSocketHelper._subscriptions) != true)
        {
            WebSocketHelper._subscriptions = [];
        }

        if(isDefined(key) != true || key === undefined)
        {
            key = 'all';
        }

        if(WebSocketHelper._subscriptions.includes(key) == false)
        {
            WebSocketHelper._subscriptions.push(key);
        }
        
        if(isDefined(WebSocketHelper._socket) && WebSocketHelper._socket !== undefined)
        {
            WebSocketHelper._socket.emit('subscribe', key);
        }
    }

    /**
     * Unsubscribe from a Site or RTU for Events
     * 
     * @static
     * @public
     * @param {string} [key] - The Site ID or RTU ID Key (e.g. site.2 or rtu.1200)
     */
    static unsubscribe(key = undefined)
    {
        // TODO: Re-Write as Async (Use a Promise) and set up an "Ack" callback so we know the WebSocket Server has Unsubscribed us
        
        if(isDefined(WebSocketHelper._subscriptions) != true)
        {
            WebSocketHelper._subscriptions = [];
        }
        
        if(isDefined(key) != true || key === undefined)
        {
            key = 'all';
        }

        if(WebSocketHelper._subscriptions.indexOf(key) >= 0)
        {
            WebSocketHelper._subscriptions.splice(WebSocketHelper._subscriptions.indexOf(key), 1);
        }

        if(isDefined(WebSocketHelper._socket) && WebSocketHelper._socket !== undefined)
        {
            WebSocketHelper._socket.emit('unsubscribe', key);
        }
    }

    /**
     * Register Events Handler
     * 
     * @static
     * @public
     * @param {string} event - The Event to Register a Handler for
     * @param {WebSocketHelper.eventCallback} handler - The Handler Callback
     */
    static on(event, handler)
    {
        if(isDefined(WebSocketHelper._emitter) != true || WebSocketHelper._emitter === undefined)
        {
            WebSocketHelper._emitter = new EventEmitter();
        }

        WebSocketHelper._emitter.on(event, handler);
    }

    /**
     * Emit an Event
     * 
     * @static
     * @public
     * @param {string} event - The Event to Emit
     * @param {any[]} args - Arguments to pass to the Event Handlers
     */
    static emit(event, ...args)
    {
        if(WebSocketHelper._socket === undefined)
        {
            return;
        }

        WebSocketHelper._socket.emit(event, ...args);
    }
}

/**
 * The Events Callback
 * 
 * @callback WebSocketHelper.eventCallback
 * @param {...any} args - The Callback Arguments
 * @return {void}
 */

export default WebSocketHelper;
