const { Router } = require("express");

module.exports = function({ UserController }) {
  const router = Router();

  router.get("/", UserController.getUsers.bind(UserController));
  router.post("/", UserController.createUser.bind(UserController));
  router.put("/", UserController.updateUser.bind(UserController));

  return router;
};
