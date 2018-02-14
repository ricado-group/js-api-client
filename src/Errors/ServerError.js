/**
 * An Error Class for Code 500 Responses from the API
 */
class ServerError extends Error
{
    /**
     * Constructor
     * 
     * @public
     */
    constructor(...args)
    {
        super(...args);

        if(Error.captureStackTrace)
        {
            Error.captureStackTrace(this, ServerError);
        }
    }
}