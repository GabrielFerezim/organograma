import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa/Index'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => { // props sempre é passada, não esquecer.
    const times = [
        'CEO',
        'Desenvolvedores',
        'Devops',
        'Suporte',
        'Anúncio'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImage] = useState('');
    const [time, setTime] = useState('');

    const Salvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
    }

    return (
        <section className="formulario">
            <div className="abstract-background-element"></div> 
            <form onSubmit={Salvar}>
                <h2>Preencha os dados para criar o card do <span className="highlight">colaborador</span></h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome " valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo " valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <CampoTexto label="Imagem" placeholder="Digite a url da sua imagem " valor={imagem} aoAlterado={valor => setImage(valor)} />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} valor={time} aoAlterado={valor => setTime(valor)} />
                <Botao texto="Criar card" />
            </form>
        </section>
    )
}

export default Formulario