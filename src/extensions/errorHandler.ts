'use strict';

const handler = {
    ERR_REQUEST_DATA: {
        status: 400,
        message: 'Bad request data.',
    },
    ERR_DATE_FORMAT: {
        status: 400,
        message: 'Bad request data, wrong date format.',
    },
    ERR_DUPLICATE: {
        status: 400,
        message: 'Bad request data, data already exist.',
    },
    ERR_DATABASE_ERROR: {
        status: 400,
        message: 'Database operation failed.',
    },
    ERR_NOT_AUTHORIZATION: {
        status: 401,
        message: 'No permission',
    },
    ERR_NOT_ALLOWED: {
        status: 403,
        message: 'Not allowed.',
    },
    ERR_NOT_FOUND: {
        status: 404,
        message: 'Not found.',
    },

    ERR_UNKNOWN_ERROR: {
        status: 500,
        message: 'Unknown error.',
    }
};

class ResponseError extends Error {
    expose?: boolean
    status?: number
}

export function errorHandler(handlerMessage) {
    let result = handler[handlerMessage];
    const error = new ResponseError()
    error.expose = true

    if (!result && !handlerMessage) {
        error.status = 500
        error.message = 'Unknown error.'
        return error
    }

    if (!result) {
        result = handler["ERR_UNKNOWN_ERROR"]
    }

    console.log('  ' + result.message)
    error.status = result.status
    error.message = result.message

    return error
}
