import { useEffect, useState } from 'react'

function Test() {
  //Nome do Estado, Nome Da func que muda o estado
  {/*const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState('')
  const [user, setUser] = useState({}) */}
  const [tarefas, setTarefa] = useState([
    'T1',
    'T2'
  ]);
  const [input, setInput] = useState('');

  function handleInput(e)
  {
    e.preventDefault();

    setTarefa([...tarefas, input]);
    setInput('');
  }

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa')
  
    if(tarefasStorage)    
      setTarefa(JSON.parse(tarefasStorage))
  }, [])

  //Toda a vez que o useState "Tarefas" sofrer uma alteração chama o codigo do useEffect
  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas));
  },
   [tarefas])

  return (
    <div>  

      <label>Nome da Tarefa: </label><br/>
      <input 
      placeholder="Digite uma tarefa"
       value={input}
       onChange={e => setInput(e.target.value)}></input>
      <button onClick={handleInput}>Registrar</button>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>
            {tarefa}
          </li>        
        ))}
      </ul>
      
  {/* return (
     <div>
       <form onSubmit={handleForm}>
         <label>Nome: </label> <br/>
         <input 
         placeholder="Digite seu nome"
         value={nome}
         onChange={e => setNome(e.target.value)}></input><br/>
         <input 
        <label>Email: </label> <br/>
         placeholder="Digite seu email"
         value={email}
         onChange={e => setEmail(e.target.value)}></input><br/>
        <label>Idade: </label> <br/>
         <input 
         placeholder="Digite sua idade"
         value={idade}
         onChange={e => setIdade(e.target.value)}></input><br/>
        <button>Finalizar</button>
       </form>
      <span>Nome: {user.nome}</span> <br></br>
       <span>Email: {user.email}</span><br></br>
       <span>Idade: {user.idade}</span> */}

    {/* <h1>Componente App    
    </h1>        
    <h2>Olá: {aluno}</h2>
    <br/>
    <button onClick={() => handleAlunoName("Breno")}>Mudar Nome</button> */}

    {/* <Nome aluno="Breno" idade={28}></Nome> */}

    </div>
  );
}



//Exporta por padrão esse app para outros aplicativos conseguirem usar ele
export default Test;
