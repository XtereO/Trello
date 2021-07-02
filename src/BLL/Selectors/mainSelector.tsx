import { ListItem } from "../../UI/Bricks/ListItem";
import { AppStateType } from "../store";

export const getLists=(state:AppStateType)=>{
    return state.main.lists
}
export const getOpenedList=(state:AppStateType)=>{
    return state.main.openedList
}
export const getOpenedBoard=(state:AppStateType)=>{
    return state.main.openedBoard
}