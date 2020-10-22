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
     * @type {EventEmitter}
     */
    static _emitter = undefined;

    /**
     * An Array of Subscriptions
     * 
     * @private
     * @type {string[]}
     */
    static _subscriptions = undefined;

    /**
     * The Socket.IO WebSocket Instance
     * 
     * @private
     * @type {any}
     */
    static _socket = undefined;

    /**
     * Initialize
     * 
     * @package
     */
    static initialize()
    {
        WebSocketHelper._emitter = new EventEmitter();
        
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
            pingTimeout: 15000
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
                    WebSocketHelper._socket.emit('subscribe', subscription);
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
                    WebSocketHelper._socket.connect();
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
            WebSocketHelper._emitter.emit(event, ...args);
        });
    }

    /**
     * Loggging
     * 
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
     * @public
     * @param {string} [key] - The Site ID or RTU ID Key (e.g. site.2 or rtu.1200)
     */
    static subscribe(key = null)
    {
        if(isDefined(WebSocketHelper._subscriptions) != true)
        {
            WebSocketHelper._subscriptions = [];
        }

        if(isDefined(key) != true)
        {
            key = 'all';
        }

        if(WebSocketHelper._subscriptions.includes(key) == false)
        {
            WebSocketHelper._subscriptions.push(key);
        }
        
        if(isDefined(WebSocketHelper._socket))
        {
            WebSocketHelper._socket.emit('subscribe', key);
        }
    }

    /**
     * Unsubscribe from a Site or RTU for Events
     * 
     * @public
     * @param {string} [key] - The Site ID or RTU ID Key (e.g. site.2 or rtu.1200)
     */
    static unsubscribe(key = null)
    {
        if(isDefined(WebSocketHelper._subscriptions) != true)
        {
            WebSocketHelper._subscriptions = [];
        }
        
        if(isDefined(key) != true)
        {
            key = 'all';
        }

        if(WebSocketHelper._subscriptions.indexOf(key) >= 0)
        {
            WebSocketHelper._subscriptions.splice(WebSocketHelper._subscriptions.indexOf(key), 1);
        }

        if(isDefined(WebSocketHelper._socket))
        {
            WebSocketHelper._socket.emit('unsubscribe', key);
        }
    }

    /**
     * Register Events Handler
     * 
     * @public
     * @param {string} event - The Event to Register a Handler for
     * @param {any} handler - The Handler
     */
    static on(event, handler)
    {
        if(isDefined(WebSocketHelper._emitter) != true)
        {
            WebSocketHelper._emitter = new EventEmitter();
        }

        WebSocketHelper._emitter.on(event, handler);
    }

    /**
     * Emit an Event
     * 
     * @param {string} event - The Event to Emit
     * @param {any[]} args - Arguments to pass to the Event Handlers
     */
    static emit(event, ...args)
    {
        WebSocketHelper._socket.emit(event, ...args);
    }
}

export default WebSocketHelper;
