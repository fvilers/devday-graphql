const db = [
  new Person(1, 'Fabian', 'Vilers', 'fabian.vilers@dev-one.com', [2, 3]),
  new Person(2, 'Matthieu', 'Vandenhende', 'matthieu@vandenhende.be'),
  new Person(3, 'Adrien', 'Clerbois', 'adrien@clerbois.be')
];

export default class Person {
  constructor(id, firstName, lastName, email, friends = []) {
    this.id = id;
    this.firstName = firstName;
    this.email = email;
    this.friends = friends;
  }

  static find() {
    return db;
  }
}
