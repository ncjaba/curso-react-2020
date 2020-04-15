import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Home from './views/home'
import CadastroProduto from './views/produtos/cadastro'
import ConsultaProdutos from './views/produtos/consulta'


export default () => {
    return (
        <Switch>
            <Route exact={true} path="/cadastro-produtos/:sku?" component={CadastroProduto}></Route>                
            <Route exact={true} path="/consulta-produtos" component={ConsultaProdutos}></Route>
            <Route exact={true} path="/" component={Home}></Route>
        </Switch>
    )
}