import './App.css';
import imagem from './img/shinchan-bg.png'

function App() {
  const nome = "Johon";
  const sobrenome = "Gomes";

  const Saudacao = () => "Olá, seja bem vindo!";
  const Apresentacao = () => 
 <div>
  Estou estudando Programação a 6 Meses e gostei da área e dei início a faculdade de Análise e Desenvolvimento de Sistemas.<br/>
  Quero me tornar um Desenvolvedor Full Stack.<br/><br/>
  Tenho me dedicado a aprender várias tecnologias!<br/>
  Estou sempre em busca de novos desafios e oportunidades para aplicar meus conhecimentos.
 </div>
  

  const aprendendo = [
    {
      Linguagem_Framework : "React",
      curso: "iTalents"
    },
    {
      Linguagem_Framework : "HTML / CSS",
      curso: "Udemy"
    },
    {
      Linguagem_Framework : "Java",
      curso: "Oracle One"
    },
  ]

  return (

    <div className="container">
      
      <div className="saudacao">
        <h1><Saudacao/></h1> 
        <h2 className="titulo">Meu nome é {nome} {sobrenome}</h2>
        <p className="paragrafo"><Apresentacao/></p>
        <p>Dei um Start com essas tecnologias : </p>    
      </div>

      <div className="aprendendo">
       <ul>
        {aprendendo.map(aprendendo => (
        <li>{aprendendo.Linguagem_Framework} - {aprendendo.curso}</li>
        ))}
        </ul>
       </div>      

       <div style={{
        color:'white',
        textdecoration: 'none',
        cursor: 'pointer',
       }}> 
         <a href="https://www.linkedin.com/in/johongomes/" >Linkedin</a><br/>
         <a href="https://github.com/JohonGomes" >Git Hub</a>
       </div>

    </div>
  
  );
}

export default App;
