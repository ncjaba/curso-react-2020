
const PRODUTOS = "_PRODUTOS"                                            // chave


export function ErroValidacao (errorsx) {
    this.errors = errorsx;
}

export default class ProdutoService {

    obterProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS)
        if(!produtos){
            return [];
        }
        return JSON.parse(produtos)
    }


    validar = (produto) => {
        const errors = []

        if (!produto.nome) {
            errors.push("O campo Nome é obrigatório!")  
        //    console.log("NC Erro no nome")  
        } 
        if (!produto.sku) {
            errors.push("O campo SKU é obrigatório!")    
        //    console.log("NC Erro no sku")          
        } 
        if (!produto.preco || produto.preco <= 0) {
            errors.push("O campo Preço deve ser maior do que zero!")    
        //   console.log("NC Erro no preco")          
        } 
        if (!produto.fornecedor) {
            errors.push("O campo Fornecedor é obrigatório!")    
        //    console.log("NC Erro no fornecedor")          
        } 
        if (errors.length > 0) {
//            console.log("Entrou no throw")          
//            console.log(errors);
//            console.log("Length = " + errors.length);             
            throw new ErroValidacao (errors)
        }
    }

    // Varre a lista de produtos cadastrados a procura do sku que se esta querendo salvar
    // Se ja existe, retorna o index, caso contrario retorna null
    // Obs: da forma como vai ficar o programa so sera possivel cadastrar um unico produto com aquele tipo de SKU

    obterIndex = (sku) => {
        let index = null;
        this.obterProdutos().forEach( (produto, i) => {
            if(produto.sku === sku){
                index = i;
            }
        })
        return index;
    }


    deletar = (sku) => {
        const index = this.obterIndex(sku)
        if (index !== null){
            const produtos = this.obterProdutos()
            produtos.splice(index, 1)
            localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
            return produtos;
        }
    }


    salvar = (produto) => {

        this.validar(produto);

        let produtos = localStorage.getItem(PRODUTOS)                   // verifica se existe no local storage; let indica variavel
                                                                        // o retorno eh nulo ou string

        if(!produtos){                                                  // na primeira vez PRODUTOS nao esta no local storage
            produtos = []                                               // entao defina array vazio
        }else{
            produtos = JSON.parse(produtos)                             // recebe string JSON obtida no getItem e transforma em objeto array
        }

        const index = this.obterIndex(produto.sku)
        if(index === null){
            produtos.push(produto);                                     // o push eh um metodo do array, para adicionar um novo
        }else{
            produtos[index] = produto;                                  // so atualiza o array na posição correta
        }

        
        localStorage.setItem(PRODUTOS, JSON.stringify(produtos));       // transforma o objeto array em string JSON

    }
}