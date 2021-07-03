import { BoardType, ListType, TaskType } from "../../Types/Type";

const ADD_LIST:"MainReducer/ADD_LIST"="MainReducer/ADD_LIST"
const ADD_BOARD:"MainReducer/ADD_BOARD"="MainReducer/ADD_BOARD"
const ADD_TASK:"MainReducer/ADD_TASK"="MainReducer/ADD_TASK"
const SET_OPENED_LIST:"MainReducer/SET_OPENED_LIST"="MainReducer/SET_OPENED_LIST"
const SET_OPENED_BOARD:"MainReducer/SET_OPENED_BOARD"="MainReducer/SET_OPENED_BOARD"
const SET_OPENED_TASK:"MainReducer/SET_OPENED_TASK"="MainReducer/SET_OPENED_TASK"
const SET_BOARDS:"MainReducer/SET_BOARDS"="MainReducer/SET_BOARDS"
const SET_BOARD:"MainReducer/SET_BOARD"="MainReducer/SET_BOARD"
const SET_LISTS:"MainReducer/SET_LISTS"="MainReducer/SET_LISTS"

const testLists=[
    {title:"PricolJS",boards:[
        {title:"Board1",tasks:[{title:"Task1",description:""},
            {title:"Task2",description:""},
        ]},{title:"Board2",tasks:[{title:"Task3",description:""}]}
    ]}
] as ListType[]
const initialState={
    openedList:null as null | ListType,
    openedBoard:null as null | BoardType,
    openedTask:null as null | TaskType,
    lists:[] as ListType[]   
}
type InitialStateType=typeof initialState
type ActionType=(AddListType | AddBoardType | AddTaskType | SetOpenedTaskType
    | SetOpenedBoardType | SetOpenedListType | SetBoardsType |
    SetBoardType | SetListsType)

export const mainReducer=(state=initialState,action:ActionType):InitialStateType=>{
    switch (action.type){
        case SET_LISTS:
            return{
                ...state,
                lists:[...action.lists]
            }
        case SET_BOARD:
            return{...state,
            lists:state.lists.map(l=>{
                if(state.openedList?.title===l.title){
                    l.boards=l.boards.map(b=>{
                        if(b.title===action.board.title){
                            b.tasks=action.board.tasks
                            b.title=action.board.title
                            return b 
                        }
                        return b
                    })
                }
                return l
            })}
        case SET_BOARDS:
            return{
                ...state,
                lists:[...state.lists.map(l=>{
                    if(l.title===state.openedList?.title){
                        return {
                            title:l.title,
                            boards:[...action.boards]
                        }
                        
                    }
                    return l
                })],
                openedList:{title:state.openedList?.title as string,
                boards:[...action.boards]
                }
            }
        case SET_OPENED_LIST:
            return{...state,
            openedList:action.list}
        case SET_OPENED_BOARD:
            return{...state,
            openedBoard:action.board}
        case SET_OPENED_TASK:
            return{...state,
            openedTask:action.task}
        case ADD_LIST:
            return {...state,
            lists:[...state.lists,{title:action.title,boards:[]}]}
        case ADD_BOARD:
            return {...state,
            lists:state.lists.map(l=>{
                if(state.openedList && state.openedList.title === l.title){
                    l.boards.push({title:action.title,tasks:[]})
                }
                return l
            }),openedList:{title:state.openedList?.title as string,
            boards:[...state.openedList?.boards as BoardType[],
                {title:action.title,tasks:[]}] } }
        case ADD_TASK:
            return {...state,
            lists:state.lists.map(l=>{
                if(state.openedList && state.openedList.title === l.title){
                    l.boards=l.boards.map(b=>{
                        if(state.openedBoard && state.openedBoard.title===b.title){
                            b.tasks.push({title:action.title,description:""})
                        }
                        return b
                    })
                }
                return l
            })}
        default:
            return state
    }
}

type SetListsType={
    type:typeof SET_LISTS
    lists:ListType[]
}
export const setLists=(lists:ListType[]):SetListsType=>{
    return{
        type:SET_LISTS,
        lists
    }
}

type SetBoardType={
    type:typeof SET_BOARD
    board:BoardType
}
export const setBoard=(board:BoardType):SetBoardType=>{
    return{
        type:SET_BOARD,
        board
    }
}

type SetBoardsType={
    type:typeof SET_BOARDS
    boards:BoardType[]
}
export const setBoards=(boards:BoardType[]):SetBoardsType=>{
    return{
        type:SET_BOARDS,
        boards
    }
}

type AddListType={
    type:typeof ADD_LIST
    title:string
}
export const addList=(title:string):AddListType=>{
    return{
        type:ADD_LIST,
        title
    }
}

type AddBoardType={
    type:typeof ADD_BOARD
    title:string
}
export const addBoard=(title:string):AddBoardType=>{
    return{
        type:ADD_BOARD,
        title
    }
}

type AddTaskType={
    type:typeof ADD_TASK
    title:string
}
export const addTask=(title:string):AddTaskType=>{
    return{
        type:ADD_TASK,
        title
    }
}

type SetOpenedListType={
    type:typeof SET_OPENED_LIST
    list:ListType
}
export const setOpenedList=(list:ListType):SetOpenedListType=>{
    return{
        type:SET_OPENED_LIST,
        list
    }
}

type SetOpenedBoardType={
    type:typeof SET_OPENED_BOARD
    board:BoardType
}
export const setOpenedBoard=(board:BoardType):SetOpenedBoardType=>{
    return{
        type:SET_OPENED_BOARD,
        board
    }
}

type SetOpenedTaskType={
    type:typeof SET_OPENED_TASK
    task:TaskType
}
export const setOpenedTask=(task:TaskType):SetOpenedTaskType=>{
    return{
        type:SET_OPENED_TASK,
        task
    }
}