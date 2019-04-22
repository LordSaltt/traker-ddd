class UserRepository {
  constructor({ db }) {
    this._db = db;
  }

  getUsers() {
    return this._db.users.findAll();
  }

  createUser(user) {
    return this._db.users.create(user);
  }

  updateUser(user) {
    const { id, name, lastname } = user;
    return this._db.users.update({ name: name }, { where: { id: id } });
  }
}

module.exports = UserRepository;
