const AppError = require("../utils/AppError")

class UsersControllers {
    create(request, response) {
        const { name , job } = request.body;
        if (!name) {
            throw new AppError ("name é obrigatório");
        }
    response.status(201).json({ name, job });
    }
}

module.exports = UsersControllers;
