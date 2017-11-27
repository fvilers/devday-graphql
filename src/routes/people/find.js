import createError from 'http-errors';

const find = () => {
  throw new createError.NotImplemented();
};

export default () => find;
