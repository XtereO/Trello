import { Formik, useFormikContext } from "formik"
import { useState } from "react"
import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { delay } from "../../App"
import { setLists } from "../../BLL/Reducers/MainReducer"
import { getLists } from "../../BLL/Selectors/mainSelector"


type PropsType={
    title:string
}
export const ListItem:React.FC<PropsType>=(props)=>{
    const history=useHistory()
    const toList=async ()=>{
        await delay(1000)
        history.push({
            pathname:"/board",
            search:"title="+props.title
        })
    }

    let [show,setShow]=useState(false)
    const dispatch=useDispatch()
    let lists=useSelector(getLists)
    let onDelete=()=>{
        lists=lists.filter(l=>l.title!==props.title)
        dispatch(setLists(lists))
        setShow(false)
    }
    
    return<div className="row"><button style={{outline:"none"}} onClick={toList}
    className="ListItem mt-3 container col-11" key={props.title}>
        {props.title}
        </button>
        <button 
        onClick={()=>setShow(true)}
        
        className="btn btn-light col-1 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
        </button>
        <Formik 
        initialValues={{title:props.title}}
        onSubmit={(values)=>{
            lists=lists.map(l=>{
                if(l.title===props.title){
                    return {
                        title:values.title,
                        boards:l.boards
                    }
                }
                return l
            })
            dispatch(setLists(lists))
            setShow(false)
        }}
        validate={(values)=>{
            let errors={title:""}
            if(!values.title){
                return {title:"Please enter title"}
            }
            lists.forEach(l=>{
                if(l.title!==props.title && l.title===values.title){
                    errors.title="This title have already exist"
                }
            })
            if(!errors.title) return {}
            else return errors
        }}>
        {({
            handleSubmit,
            handleChange,
            values,
            errors
        })=><form onSubmit={handleSubmit}>
        <Modal 
        show={show}
        onHide={()=>setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Change list
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Title: <input 
                className="form-control"
                value={values.title}
                name="title"
                onChange={handleChange}
                />
                <div className="text-danger">
                    {errors && errors.title}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button 
                onClick={onDelete}
                className="btn btn-danger">
                    Delete
                </button>
                <MyNaughtyButton/>
            </Modal.Footer>
        </Modal></form>}
        </Formik>
    </div>
}

type MyNaughtyButtonType={}
const MyNaughtyButton:React.FC<MyNaughtyButtonType>=(props)=>{
    
    let {submitForm}=useFormikContext()

    return<button 
    onClick={()=>submitForm()}
    className="btn btn-success">
        Save
    </button>
}