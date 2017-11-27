import debugModule from 'debug';

const debug = debugModule('express:server');
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  debug(err);
  res.sendStatus(err.status || 500);
};

export default () => errorHandler;
