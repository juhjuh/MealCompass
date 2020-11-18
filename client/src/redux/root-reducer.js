import {combineReducers} from 'redux'
import bankReducer from './banks/bank.reducer'


export default combineReducers({
    bank: bankReducer
}) 