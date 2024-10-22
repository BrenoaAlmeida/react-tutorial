import { useEffect, useState } from 'react'
import '../style.css'

function TestApi()
{
const [nutri, setNutri] = useState([]);

  //Caso o array esteja vazio ele carrega tudo na pagina
  useEffect(() => {
    function loadApi()
    {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      
      //usa then como é uma promise
      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        console.log(json);
        setNutri(json);
      })      
    }
      loadApi();
  }, [])
  return (
    <div className='container'>
      <header>
       <strong>React Nutri</strong> 
      </header>   

      {nutri.map((item) => {
        return(
          <article key={item.id} className='post'>
            <strong className='titulo'>{item.titulo}</strong>          
            <img src={item.capa} alt={item.titulo}></img>
            <p className='subtitulo'>
              {item.subtitulo}
            </p>
            <a className='botao'>Acessar</a>
          </article>
        )
      })}   
    </div>
  );
}

export default TestApi;