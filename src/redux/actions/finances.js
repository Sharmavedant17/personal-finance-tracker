import { ADD_NEW } from "../action-types/finances";
import { DELETE_FINANCE } from "../action-types/finances";


export const addNew =(data) => {
    console.log("data::", data)
    return{
        type: ADD_NEW,
        data,
    }
}

export const deleteFinance =(data) => {
    return{
        type: DELETE_FINANCE,
        data,
    }
}