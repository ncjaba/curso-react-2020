import React from 'react';

/*
class App extends React.Component{

  state = {
    nome : "Digite seu nome"
  }

  nameModify = (event) => {
    this.setState({
      nome : event.target.value
    })
  }

  criaComboBox = () => {
    const opcoes = [ "Fulano", "Ciclano"]
    const comboBoxOpcoes = opcoes.map ( opcao => <option>{opcao}</option>)

    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  componentDidMount(){
    console.log("Executou o componentDidMount")
  }

  render(){
    console.log("Executou o render")
    const MeuComboBox = () => this.criaComboBox()

    return(
      <>
        <input type="text"   value={this.state.nome}   onChange={this.nameModify} />
        <h1> Hello  {this.state.nome} </h1>
        <h1> Hello  {this.props.nome} sua idade é {this.props.idade}</h1>
        < MeuComboBox />
      </>
    )
  }
}
*/

function App (props){

 
  const nameModify = (event) => {
    console.log(event.target.value)
  }

  const criaComboBox = () => {
    const opcoes = [ "Fulano", "Ciclano"]
    const comboBoxOpcoes = opcoes.map ( opcao => <option>{opcao}</option>)

    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  const MeuComboBox = () => criaComboBox()

  return(
    <>
      <input className = "texto-centralizado"   type="text"   value={props.nome}   onChange={nameModify} />
      {/*<h1> Hello  {this.state.nome} </h1>*/}
      <h1> Hello  {props.nome} sua idade é {props.idade}</h1>
      < MeuComboBox />
    </>
  )
}

export default App;
