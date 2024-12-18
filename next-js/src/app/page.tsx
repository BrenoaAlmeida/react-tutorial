interface DataProps {
  id:number;
  name:string;
  full_name:string;
  owner:{
    login:string;
    id:number;
    avatar_url:string;  
    url:string;
  }
}

// async function getData(){
//   const data = await fetch("https://api.github.com/users/BrenoaAlmeida/repos")
//   return data.json();
// }

//fetch com delay para simular lentidão de internet
async function getData(){
  const data = await delayedFetch("https://api.github.com/users/BrenoaAlmeida/repos", 1500)
  return data;
}

async function delayedFetch(url:string, delay:number){
  await new Promise(resolve => setTimeout(resolve, delay))
  const response = await fetch(url);
  return response.json();
}

export default async function Home(){
  const data: DataProps[] = await getData();

return(
  <main>
    <h1>Página Home</h1>
    <span>Seja bem vindo!</span>  
    <br/>
    
    <h3>Meus repositorios</h3>
    {data.map((item) => (
      <div key={item.id}>
        <strong>Repositorio: </strong> <a>{item.name}</a>
        <br/><br/>
      </div>
    ))}  
  </main>
  )
}