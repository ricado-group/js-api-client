/**
 * An Error Class for Caught Fetch Errors (typically Network Related)
 */
class NetworkError extends Error
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
            Error.captureStackTrace(this, NetworkError);
        }
    }
}

export default NetworkError;