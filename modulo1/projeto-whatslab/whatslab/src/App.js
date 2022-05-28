import './App.css';
import { Message } from './components/Message';

function App() {
  return (
    <div className="App">
      <Message nome="Remetente" conteudo="conteudo da mensagem." />
    </div>
  );
}

export default App;
