import Banner from './components/Banner/Banner'
import Formulario from './components/Formulario/Index';
import './app.css'
import { useState } from 'react';

function App() { //Componente 

  const [colaboradores, setColaboradores] = useState([]) // Diferença de UseState e Let : Isa, a diferença principal entre usar o useState e criar uma variável com let é que o React só reage às mudanças de estado feitas pelo useState.
  //Quando você cria uma variável com let, se mudar o valor dela, o React não vai perceber e não vai atualizar a interface. Já quando você usa useState, toda vez que o valor muda através do setState, o React entende que precisa renderizar novamente o componente para mostrar o valor atualizado na tela.

  const aoNovoColaboradorAdicionar = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]) //Aqui eu espalho todos os colaboradores antigos e trago colaboradores no final (Novos colaboradores)
  }
  return (
    <div className='App'>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionar(colaborador)} />
    </div>
  );
}

export default App;


//React tem duas abordagens diferentes para lidar com inputs de formulários.
//Um elemento de input de formulário cujo valor é controlado pelo React é chamado de componente controlado(statefull em inglês).Quando o usuário insere dados em um componente controlado, o evento que manipula essa alteração é disparado e o seu código decide se o input é válido(ou seja, renderizado com o valor atualizado).Se você não re - renderizar o elemento de formulário, permanecerá inalterado.
//Um componente não controlado(stateless em inglês) funciona como um elemento de formulário fora do React.Quando um usuário insere dados em um campo de formulário(um input box, dropbox, etc), a informação atualizada é refletida sem necessidade do React fazer nada.No entanto, isso também significa que você não pode forçar o campo a ter um certo valor.