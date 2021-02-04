/**
 * @namespace Errors
 */
import BadRequestError from './BadRequestError';
import ForbiddenError from './ForbiddenError';
import NetworkError from './NetworkError';
import NotAllowedError from './NotAllowedError';
import NotFoundError from './NotFoundError';
import ServerError from './ServerError';
import UnauthorizedError from './UnauthorizedError';

const Errors = {
	BadRequestError,
	ForbiddenError,
	NetworkError,
	NotAllowedError,
	NotFoundError,
	ServerError,
	UnauthorizedError,
};

export default Errors;