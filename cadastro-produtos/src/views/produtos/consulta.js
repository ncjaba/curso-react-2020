import React from 'react'

import ProdutosTable from './produtosTable';
import Card from '../../components/card';
import ProdutoService from '../../app/produtoService'
import { withRouter} from 'react-router-dom'                // decorator withRouter


class ConsultaProdutos extends React.Component{
    state = {
        produtos: []
    }

    constructor(){
        super()                                                     // sempre precisa chamar super
        this.service = new ProdutoService;                          // cria um objeto service, classe ProdutoService
    }


    componentDidMount(){
        const produtos = this.service.obterProdutos();
        this.setState({produtos: produtos});                        // qdo os nomes sao iguais pode usar direto {produtos}, apenas
    }


    preparaEditar = (sku) => {
        console.log("SKU para editar = ", sku)
        this.props.history.push(`/cadastro-produtos/${sku}`)
    }

    deletar = (sku) => {
        const produtos = this.service.deletar(sku);
        this.setState({produtos : produtos})
    }

    render(){
        return(
            <Card header="Consulta Produtos">
                <ProdutosTable produtos={this.state.produtos}
                               editarAction={this.preparaEditar}
                               deletarAction={this.deletar}/>
            </Card>
        )
    }
}


export default withRouter(ConsultaProdutos)