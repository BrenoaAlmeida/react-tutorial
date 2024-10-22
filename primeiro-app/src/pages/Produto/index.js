import { useParams } from "react-router-dom";


function Produto(){
const {id} = useParams();

    return(
        <div>
            <h1>Pagina detalhe do produto</h1>

            <span>
                Meu produto é {id}
            </span>
        </div>
    )
}

export default Produto;