import { ADD_NEW } from "../action-types/finances";

const initialList = () => {
    const list =  localStorage.getItem("finance-list");
    let finances = [];
    if (list) {
        finances = JSON.parse(list);
    }
    return finances;
    
}

const initialState = {
    financeList: initialList(),
}

export const financeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW: {
            localStorage.setItem("finance-list", JSON.stringify([...state.financeList, action.data]))
            return {
                ...state,
                financeList: [...state.financeList, action.data]
            }
        }
        default: 
            return state;
    }
}   