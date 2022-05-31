import './App.css';
import { Message } from './components/Message';
import { DoubleInput } from './components/DoubleInput';
import './script';

function App() {
  return (
    <div className="App">
      <ul>
        <Message nome="Remetente:" conteudo="conteudo da mensagem." />
        <Message
          nome="Outro Remetente:"
          conteudo="conteudo da mensagemconteudo da mensagemconteudo da mensagemconteudo da mensagemconteudo da mensagemconteudo da mensagemconteudo da mensagemconteudo da mensagemconteudo da mensagemconteudo da mensagemconteudo da mensagemconteudo da mensagemconteudo da mensagemconteudo da mensagemconteudo da mensagemconteudo da mensagemconteudo da mensagem."
        />
      </ul>
      <form className="sendMessage">
        <DoubleInput texto1="Contato" texto2="Escreva aqui sua mensagem..." />
      </form>
    </div>
  );
}

export default App;
