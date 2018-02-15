/**
 * An Error Class for Code 404 Responses from the API
 */
class NotFoundError extends Error
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
            Error.captureStackTrace(this, NotFoundError);
        }
    }
}

export default NotFoundError;