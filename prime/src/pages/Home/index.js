import api from '../../services/api'
import { useEffect, useState } from 'react';

function Home()
{
    const [filmes, setFilmes] = useState([]);

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
        }

        loadFilmes();
    }, [])    
    
    return(//Return da function Home
        <div>
        {filmes.map((filme) => {
            return( // Return do Map
            <article key={filme.id}>
                <strong>{filme.title}</strong>
            </article>
            )
        })}
        </div>
    )
}

export default Home;