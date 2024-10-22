import Header from './components/Header';
import RoutesApp from './routes';

function App() {  
  return(
    //Abrir e fechar um fragment
    //para não ter nenhuma interferencia visual
    <>
      <RoutesApp/>
    </>
  )
}

//Exporta por padrão esse app para outros aplicativos conseguirem usar ele
export default App;
