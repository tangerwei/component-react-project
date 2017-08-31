import { dispatch } from "react-flux";
import ActionsTypes from "./ActionsTypes";
export const increment = (caption) => {
    dispatch({
        type: ActionsTypes.INCREASE,
        caption
    });
}

export const decrement = (caption) => {
    dispatch({
        type: ActionsTypes.DECREASE,
        caption
    })
}