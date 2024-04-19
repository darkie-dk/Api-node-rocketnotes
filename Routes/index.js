const { Router } = require("express");

const userRoutes = require("./users.routes");

const usersRoutes = Router();
userRoutes.use('/users', userRoutes);

module.exports = routes;