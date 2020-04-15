import React, {useState} from 'react';
import useStore from './somaReducer'


function ReducerHook() {

    // os numeros estao no state, mas o resultado foi passado para dentro do store
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');

    const   [store, dispatch] = useStore()
    
    const somar = () => {
        const numero1Int = parseInt(numero1)
        const numero2Int = parseInt(numero2)

        console.log("Dispachando a action soma")
        dispatch ({
            type: 'SOMA',
            payload: numero1Int + numero2Int
        })
    }


    const subtrair = () => {
        const numero1Int = parseInt(numero1)
        const numero2Int = parseInt(numero2)

        console.log("Dispachando a action subtração")
         dispatch ({
            type: 'SUBTRAÇÃO',
            payload: numero1Int - numero2Int
        })
    }


    return (
    
        <div >
        Número 1:<br />
        <input type="text" value={numero1} 
                onChange={e => setNumero1(e.target.value)}/><br />

        <br />Número 2:<br />
        <input type="text" value={numero2} 
                onChange={e => setNumero2(e.target.value)}/><br />

        <br /><button onClick={somar}>Somar</button>
        <button onClick={subtrair}>Subtrair</button><br />

        <br />Resultado:<br />
        <input type="text"    value={store.resultado}  readOnly/><br />
        </div>
    );
}

export default ReducerHook;
