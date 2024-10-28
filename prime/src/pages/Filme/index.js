import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

function Filme()
{
 const { id } = useParams();
 const [filme, setFilme] = useState({});
 const [loading, setLoading] = useState(true);

 
 useEffect(() => {
    async function loadFilme(){
        await api.get(`/movie/${id}`, {
            params: {
                api_key: 'ebb810af310a21bd4f16bd2544db3713',
                language: 'pt-Br',                
            }
        })
        .then((response) => {
            console.log(response.data)
            setFilme(response.data);
            setLoading(false);
        })        
        .catch(() => {
            console.log("Filme nao encontrado")
        })        
    }
    loadFilme();    

    //Ocorre quando o componente é desomontado
    return(() => {console.log("Component foi desmontado!!")})
}, [])    

if(loading)
{
    return(
        <div className="filme-info">
            <h1>Carregando detalhes...</h1>
        </div>
    )
}
    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>            

        <h3>Sinopse</h3>
        <span>{filme.overview}</span>

        <strong>Avaliação: {filme.vote_average}</strong>
        </div>
    )
}

export default Filme;