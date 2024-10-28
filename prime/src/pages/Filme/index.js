import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import './filme-info.css'

function Filme()
{
 const { id } = useParams();
 const [filme, setFilme] = useState({});
 const [loading, setLoading] = useState(true);
 const navigate = useNavigate();

 
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
            //Redireciona para a pagina de home e muda a url
            navigate("/", { replace: true})
        })        
    }
    loadFilme();    

    //Ocorre quando o componente é desomontado
    return(() => {console.log("Component foi desmontado!!")})
}, 
[navigate, id] //Passar depedencias para o useEffect
)    

function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(minhaLista) || [];
    
    const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id == filme.id);    

    if(hasFilme) {
        alert("Esse filme ja esta na lista");
        return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
}

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

            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button
                onClick={salvarFilme}
                >Salvar</button>
                <button>
                    <a target="blank"//Abrir em uma nova guia caso coloque _blank ele funciona no anonimo so que não é tão seguro
                    rel="external" //opcional, passar para informar que o link que estamos abrindo é algo externo ou interno
                    href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;