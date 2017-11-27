import createError from 'http-errors';

const get = () => {
  throw new createError.NotImplemented();
};

export default () => get;
