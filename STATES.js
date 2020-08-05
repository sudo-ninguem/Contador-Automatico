class App extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {
        valor:0
      }
    }
   
    render(){
      setTimeout(() =>{ // Perceba que funções nativas de java funcionam perfeitamente em react

/* So lembrando que a função (setTimeout) é uma função nativa de JS que vai receber 2 parametros
   1- Vai ser os comandos que serão executados 
   2- Vai ser o tempo com que este comando será executado*/
        
        this.setState({ // O setStates é um método da class React.Component e ele serve justamente para alterar o state(estado) dos objetos
          valor: this.state.valor + 1 // Estamos acescentando +1 ao nosso dado (valor)
        })
        
      }, 1000 );
      return <h1> {this.state.valor} </h1>
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );


/////////////// ESQUELETO BÁSICO DAS CLASS COMPONENTS //////////

/* Perceba nisso tudo que quando criamos os objetos com (constructor) não alteramos os dados diretamente dentro dele, mas sim dentro
   do (render).
   
   Perceba que o (render) por sua ver é uma callback que vai ficar retornando o que permite colocarmos códigos dinamicos dentro dela
   
   E por último perceba que o método (return) é o responsável por mostrar na tela os dados da nossa aplicação*/

///// TODOS OS COMPONENTES (CONSTRUCTOR; RENDER; RETURN) SÃO MÉTODOS NATIVOS DA CLASSE REACT.COMPONENTS //////////////