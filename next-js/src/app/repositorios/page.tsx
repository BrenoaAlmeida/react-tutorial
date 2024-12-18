//É necessario usar essa diretiva para user coisas do client side com o next.js, componentes por padrão ser  Server Side, quando usamosn essa diretiva
//o componente passar a ser um Client component
"use client" 

import { useState, useEffect } from "react";

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
  
  export default function Repositorios(){
    const [repos, setRepos] = useState<DataProps[]>([]);

    useEffect(() => {
          function getData(){
            fetch("https://api.github.com/users/BrenoaAlmeida/repos")
            .then(response => response.json())
            .then((data:DataProps[]) => {
                setTimeout(() => {
                    setRepos(data) //delay para simular lentidão de internet
                }, 2000);
            })            
          }
          getData();
    }, [])
  
  return(
    <main>
      <h1>Página Home</h1>
      <span>Seja bem vindo!</span>  
      <br/>
      
      <h3>Meus repositorios</h3>
      {repos.map((item) => (
        <div key={item.id}>
          <strong>Repositorio: </strong> <a>{item.name}</a>
          <br/><br/>
        </div>
      ))}  
    </main>
    )
  }