/**
 * An Error Class for Code 401 Responses from the API
 */
class UnauthorizedError extends Error
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
            Error.captureStackTrace(this, UnauthorizedError);
        }
    }
}

export default UnauthorizedError;