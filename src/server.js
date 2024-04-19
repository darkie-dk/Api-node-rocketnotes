const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3333;

app.post("/users", (req, res) => {
    const { name , job } = req.body;
    res.send(`Usuário ${name} profissional ${job}`)
});

app.listen(PORT, () => console.log (`Server is running on PORT ${PORT}` ));
