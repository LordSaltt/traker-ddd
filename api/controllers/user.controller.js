class UserController {
  constructor({ UserService }) {
    this._userService = UserService;
  }

  async getUsers(req, res) {
    const users = await this._userService.getUsers();

    return res.send({
      error: false,
      payload: users
    });
  }

  async createUser(req, res) {
    const { body } = req;
    const createdUser = await this._userService.createUser(body);
    return res.send({
      error: false,
      payload: createdUser
    });
  }

  async updateUser(req, res) {
    const { body } = req;
    const updatedUser = await this._userService.updateUser(body);
    return res.send({
      error: false,
      payload: updatedUser
    });
  }
}

module.exports = UserController;
