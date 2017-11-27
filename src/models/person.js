class Person {
  constructor(id, firstName, lastName, email, friends = []) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.friends = friends.map(id => `/people/${id}`); // I know, this shouldn't be hard coded
  }

  static find() {
    return db;
  }

  static get(id) {
    return db.find(person => person.id === id);
  }
}

const db = [
  new Person(1, 'Fabian', 'Vilers', 'fabian.vilers@dev-one.com', [2, 3]),
  new Person(2, 'Matthieu', 'Vandenhende', 'matthieu@devday.be', [1]),
  new Person(3, 'Adrien', 'Clerbois', 'adrien@devday.be', [1])
];

export default Person;
