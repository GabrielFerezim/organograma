import { useState } from 'react';
import './Login.css';

const Login = ({ aoLogar, irParaCadastro }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async (evento) => {
        evento.preventDefault();

        try {
            const resposta = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha })
            });

            const dados = await resposta.json();

            if (dados.success) {
                aoLogar(true);
            } else {
                alert(dados.message);
            }
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao conectar ao servidor");
        }
    };

    return (
        <div className="login-container">
            <div className="abstract-background-element"></div>

            <div className="login-wrapper">
                <div className="slogan-container">
                    <h1>O Futuro da Sua <span className="highlight-slogan">Logística</span> Começa Aqui.</h1>
                    <p>Otimize, conecte e inove com nossa plataforma inteligente.</p>
                </div>

                <form onSubmit={handleLogin} className="login-form">
                    <h2>Acesse a <span className="highlight">Plataforma</span></h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                    <button type="submit">Entrar</button>
                    <button type="button" onClick={irParaCadastro}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
