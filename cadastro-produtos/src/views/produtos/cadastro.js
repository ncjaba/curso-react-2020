import React from 'react';

import Card from '../../components/card';
import ProdutoService from "../../app/produtoService";
import { withRouter} from 'react-router-dom'

const estadoInicial = {
    nome: "",
    sku: "",
    descricao: "",
    preco: 0,
    fornecedor: "",
    sucesso: false,
    erros: [],
    atualizando: false
}

class CadastroProduto extends React.Component {

    state =  estadoInicial;

    constructor(){
        super()                                                     // sempre precisa chamar super
        this.service = new ProdutoService;                          // cria um objeto service, classe ProdutoService
    }

    capturaMudanca = (event) => {
        const valor = event.target.value;
        const nomeVariavel = event.target.name;
        this.setState({ [nomeVariavel]: valor  })
    }

    onSubmit = (event) => {
        event.preventDefault();  
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor        
        }
        try {
            this.service.salvar(produto)
            this.limpaVariaveis()
            this.setState({sucesso: true})           
        } catch (erro) {
//            console.log("NC Entrou no catch")          
            const errors = erro.errors
            this.setState({erros : errors})
//            console.log(this.state.erros);
//            console.log("Length = " + this.state.erros.length);        
       }
    }

    limpaVariaveis = () => {
        this.setState(estadoInicial)
    }


    // Se a entrada na tela via URL foi sem parametro, entao segue a tela em branco, porque o usuário quer cadastrar um novo produto
    // Se a entrada via URL veio com parametro, então esta querendo editar

    componentDidMount(){
        const sku = this.props.match.params.sku;
        if(sku){
            const resultado = this.service.obterProdutos().filter( produto => produto.sku === sku)
            if(resultado.length === 1){
                const carga = resultado[0]
                this.setState({...carga, atualizando: true})
            }
        }
    }

    render(){
        return(
            <Card header={this.state.atualizando? "Atualização de Produtos" : "Cadastro de Produtos"}>
                    <form id="frmProduto" onSubmit={this.onSubmit}>
                            {this.state.sucesso &&
                                    <div class="alert alert-dismissible alert-success">
                                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                                        <strong>Muito bem!</strong> Cadastro realizado com sucesso!
                                    </div>
                            }

                            {this.state.erros.length >0 &&
                                this.state.erros.map (msg => {
                                    return(
                                        <div class="alert alert-dismissible alert-danger">
                                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                                            <strong>Erro!</strong> {msg}
                                        </div>
                                    )
                                })
                            }
                        
                            <div className= "row">
                                <div className="col-md-6">
                                    <div className ="form-group">
                                        <label>Nome: *</label>
                                        <input type = "text"                    
                                            name = "nome"                    
                                            onChange={this.capturaMudanca}   
                                            value={this.state.nome}          
                                            className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className ="form-group">
                                        <label>SKU: *</label>              
                                        <input type = "text" 
                                            name = "sku"
                                            disabled = {this.state.atualizando}
                                            onChange={this.capturaMudanca}
                                            value={this.state.sku} 
                                            className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div className= "row">
                                <div className="col-md-12">
                                    <div className ="form-group">
                                        <label>Descrição: </label>              
                                        <textarea name = "descricao"
                                                onChange={this.capturaMudanca}                                          
                                                value={this.state.descricao} 
                                                className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div className= "row">
                                <div className="col-md-6">
                                    <div className ="form-group">
                                        <label>Preço: *</label>              
                                        <input type = "text" 
                                            name = "preco"
                                            onChange={this.capturaMudanca}                                       
                                            value={this.state.preco} 
                                            className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className ="form-group">
                                        <label>Fornecedor: *</label>              
                                        <input type = "text" 
                                            name = "fornecedor"
                                            onChange={this.capturaMudanca}                                       
                                            value={this.state.fornecedor} 
                                            className="form-control"/>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className= "col-md-1">
                                    <button type="submit" className="btn btn-success" >
                                        {this.state.atualizando? "Atualizar" : "Salvar"}
                                    </button>
                                </div>
                                <div className= "col-md-1">
                                    <button onClick = {this.limpaVariaveis} className="btn btn-primary" >Limpar</button>
                                </div>
                            </div>
                    </form>
            </Card>
        )
    }
}

export default withRouter (CadastroProduto)
