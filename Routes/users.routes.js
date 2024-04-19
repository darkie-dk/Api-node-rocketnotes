const { Router } = require("express");

const usersRoutes = Router();

app.post("/", (req, res) => {
    const { name , job } = req.body;
    res.send(`Usuário ${name} profissional ${job}`)
});

module.exports = usersRoutes;