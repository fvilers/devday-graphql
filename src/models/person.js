class Person {
  constructor(id, firstName, lastName, email, friends = []) {
    this.id = id;
    this.firstName = firstName;
    this.email = email;
    this.friends = friends.map(id => `/people/${id}`); // I know, this shouldn't be hard coded
  }

  static find() {
    return db;
  }
}

const db = [
  new Person(1, 'Fabian', 'Vilers', 'fabian.vilers@dev-one.com', [2, 3]),
  new Person(2, 'Matthieu', 'Vandenhende', 'matthieu@devday.be'),
  new Person(3, 'Adrien', 'Clerbois', 'adrien@devday.be')
];

export default Person;
