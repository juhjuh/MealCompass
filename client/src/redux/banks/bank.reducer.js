import { BankActionTypes } from "./bank.types"

const INITIAL_STATE = {
    currentBank : null
}

const bankReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BankActionTypes.SET_CURRENT_BANK:
            return{
                ...state,
                currentBank:action.payload
            }
            
            
    
        default:
           return state
    }
}

export default bankReducer;