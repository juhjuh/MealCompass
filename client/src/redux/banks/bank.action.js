import { BankActionTypes } from "./bank.types";

export const setCurrentBank = bank => ({
    type:BankActionTypes.SET_CURRENT_BANK, // check type first 
    payload:bank  // then we pass payload as the bank
})

// returns object to reducer

// dispatch sends payload


// 'SET_CURRENT_BANK' = BankActionTypes.SET_CURRENT_BANK