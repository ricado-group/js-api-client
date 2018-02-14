/**
 * An Error Class for Code 400 Responses from the API
 */
class BadRequestError extends Error
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
            Error.captureStackTrace(this, BadRequestError);
        }
    }
}