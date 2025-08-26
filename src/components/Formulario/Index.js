import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa/Index'
import Botao from '../Botao'

const Formulario = () => {

    const times = [
        'CEO',
        'Desenvolvedores',
        'Devops',
        'Suporte',
        'Anúncio'
    ]

    const Salvar = (evento) => {
        evento.preventDefault();
        console.log('Formulario salvo com sucesso!');
    }

    return (
        <section className="formulario">
            <div className="circulo-lateral"></div>
            <form onSubmit={Salvar}>
                <h2>Preencha os dados para criar o card do <span className="highlight">colaborador</span></h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome " /> {/*O termo 'obrigatorio' é uma validação nativa do HTML */}
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo " />
                <CampoTexto label="Imagem" placeholder="Digite a url da sua imagem " />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
                <Botao texto="Criar card" />
            </form>
        </section>
    )
}

export default Formulario