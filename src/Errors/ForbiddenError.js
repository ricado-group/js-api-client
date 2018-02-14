/**
 * An Error Class for Code 403 Responses from the API
 */
class ForbiddenError extends Error
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
            Error.captureStackTrace(this, ForbiddenError);
        }
    }
}