import api from '../../services/api'
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import './home.css'

function Home()
{
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: 'ebb810af310a21bd4f16bd2544db3713',
                    language: 'pt-Br',
                    page: 1
                }
            })    
            //console.log(response.data.results)
            setFilmes(response.data.results.slice(0,10))
            setLoading(false);
        }

        loadFilmes();
    }, [])    
    
if(loading)
{
    return (
        <div>
            <h2 className='loading'>Carregando Filmes...</h2>
        </div>
    )
}

    return(//Return da function Home
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return( // Return do Map
                    //  Ao usar o Map você precisa passar a chave no primeiro item para o  react
                    <article key={filme.id}>
                        <strong>{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                    </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;