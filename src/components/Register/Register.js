import { useState } from 'react';
import './Register.css';

const Cadastro = ({ voltarParaLogin }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastro = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha }),
            });
            const data = await res.json();
            alert(data.mensagem);
            setEmail('');
            setSenha('');
        } catch (err) {
            console.error(err);
            alert('Erro ao conectar com o servidor');
        }
    };

    return (
        <form onSubmit={handleCadastro} className="cadastro-form">
            <h2>
                Crie sua <span className="highlight">Conta</span>
            </h2>
            <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Crie uma senha forte"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
            />
            <button type="submit">Cadastrar</button>
            <button type="button" onClick={voltarParaLogin}>
                Voltar para Login
            </button>
        </form>
    );
};

export default Cadastro;