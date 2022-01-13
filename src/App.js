import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulos from './components/Titulos';
import Frase from './components/Frase';


function App() {
  return (
    <section className='container'>

      <article>
        <Titulos></Titulos>
      </article>

      <article> 
        <Frase></Frase>
      </article>
    
    </section>
    
  );
}

export default App;
