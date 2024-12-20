//Para criar um pagina de parametro é necessario criar umma pasta com o nome do parametro, usando o roteamento dinaminco => [NOME_DO _PARAMETRO]

interface PageDetailProps {
    params:{
        id:string;
    }
}

export default function RepositoroId({params}: PageDetailProps){
    return(
        <div>
            <span>Detalhes do repositorio: {params.id}</span>
        </div>
    )
}