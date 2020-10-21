import RequestHelper from '../RequestHelper';
/**
 * The Tools Controller Class
 */
class ToolsController
{
    // Ping Actions [/ping]

    /**
     * Ping the API Server [GET /ping]
     * 
     * Sends a 'Ping' Request to the Server of which the Server will respond with 'Pong'. Authentication is not required to make this API call.
     * 
     * @static
     * @public
     * @return {Promise<string>}
     */
    static ping()
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/ping`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }
}

export default ToolsController;