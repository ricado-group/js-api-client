/**
 * An Error Class for Code 405 Responses from the API
 */
class NotAllowedError extends Error
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
            Error.captureStackTrace(this, NotAllowedError);
        }
    }
}

export default NotAllowedError;