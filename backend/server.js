import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "login_system"
});

app.post("/login", (req, res) => {
    const { email, senha } = req.body;

    const sql = "SELECT * FROM users WHERE email = ? AND senha = ?";
    db.query(sql, [email, senha], (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Erro no servidor" });
        }
        if (result.length > 0) {
            res.json({ success: true, message: "Login realizado com sucesso" });
        } else {
            res.json({ success: false, message: "Email ou senha inválidos" });
        }
    });
});

app.post("/register", (req, res) => {
    const { email, senha } = req.body;

    const sql = "INSERT INTO users (email, senha) VALUES (?, ?)";
    db.query(sql, [email, senha], (err, result) => {
        if (err) {
            return res.status(500).json({ sucesso: false, mensagem: 'Erro ao cadastrar' });
        }
        res.json({ sucesso: true, mensagem: 'Cadastro realizado com sucesso!' });
    })
})

app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
});
