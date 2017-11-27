import { Person } from '../../models';

const find = (req, res) => {
  const people = Person.find();

  res.status(200).json(people);
};

export default () => find;
