import { useReducer} from 'react'

const STATE_INICIAL= {
    resultado : ""
}

// Dispatcher
const somaReducer = ( state = STATE_INICIAL, action) => {
    console.log("Action sera executada: ", JSON.stringify(action))      // // transforma o objeto array em string JSON
    switch (action.type) {
        case "SOMA":
        case "SUBTRAÇÃO":    
            return {...state, resultado: action.payload}
                
        default:
            return state;
    }
}

// Hook
const useStore = () =>  useReducer(somaReducer, STATE_INICIAL)

export default useStore