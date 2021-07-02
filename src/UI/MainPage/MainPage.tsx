import React,{useState} from "react"
import { Plus } from "../Bricks/Plus";
import { Header } from "./Header";
import { AddList } from "./AddList";
import { addList } from "../../BLL/Reducers/MainReducer"
import { useDispatch, useSelector } from "react-redux";
import { getLists } from "../../BLL/Selectors/mainSelector";
import { ListItem } from "../Bricks/ListItem";
import { Toast } from "react-bootstrap";

type PropsType={
    isPC:boolean
    height:number
}

export const MainPage:React.FC<PropsType>=(props)=>{
    const lists=useSelector(getLists)
    const listsJSX=lists.map(l=><ListItem title={l.title} />)

    const dispatch=useDispatch()
    const addListWithDispatch=(text:string)=>{
        dispatch(addList(text))
        setShowToast(true)
    }


    let [showToast,setShowToast]=useState(false)

    let [show,setShow]=useState(false)//For Modal
    const closeHandler= ()=>{
        setShow(false)
    }
    const openHandler=()=>{setShow(true)}
    return<div>
        <Header />
        <div className="container mt-4">
            {[...listsJSX].reverse()}
        </div>
        <Plus isPC={props.isPC} function={openHandler}/>
        <AddList show={show} closeHandler={closeHandler} 
        title={"list"}
        addFunction={addListWithDispatch} borrowedGroup={lists}
        />
        <div 
        className="ml-4"
        style={{
            position:"fixed",
            display:"flex",
            justifyContent:"flex-end",
            alignItems:"flex-end",
            height:props.height-400
        }}>
        <Toast 
        show={showToast} autohide
        onClose={()=>setShowToast(false)} delay={3000}>
            <Toast.Header>
                <strong className="mr-auto">
                    Notice
                </strong>
            </Toast.Header>
            <Toast.Body>
                New list added successfull
            </Toast.Body>
        </Toast>
        </div>
        </div>
}
