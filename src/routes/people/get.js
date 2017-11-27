import createError from 'http-errors';
import { Person } from '../../models';

const get = (req, res) => {
  const person = Person.get(+req.params.id); // '+' to convert string to number  

  if (!person) {
    throw new createError.NotFound();
  }

  res.status(200).json(person);
};

export default () => get;
