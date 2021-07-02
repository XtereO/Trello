import { Formik, useFormikContext } from "formik"
import { useState } from "react"
import { Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { setBoard } from "../../BLL/Reducers/MainReducer"
import { BoardType, TaskType } from "../../Types/Type"


type PropsType = {
    title: string
    description: string
    key: string
    board: BoardType
    dragStartHandler: (e: any, task: TaskType, board: BoardType) => void
    dragEndHandler: (e: any) => void
    dragOverHandler: (e: any) => void
    dropHandler: (e: any, task: TaskType, board: BoardType) => void
}

const MyNaughtyButton:React.FC<any>=(props)=>{
    
    let {submitForm}=useFormikContext()
    
    return<button
        onClick={()=>{
            submitForm()
        }}
        type="submit"
        className="btn btn-success"
        >
            Save
    </button>
}
export const TaskItem: React.FC<PropsType> = (props) => {

    let [show, setShow] = useState<boolean>(false)
    const dispatch = useDispatch()

    const onDelete=()=>{
        let updateBoard={
            title:props.board.title,
            tasks:[]
        } as BoardType
        updateBoard.tasks=props.board.tasks.filter(t=>t.title!==props.title)
        dispatch(setBoard(updateBoard))
        setShow(false)
    }

    return <div>
        <div
            onDoubleClick={() => setShow(true)}
            onDragStart={(e: any) => props.dragStartHandler(e, { title: props.title, description: props.description }, props.board)}
            onDragEnd={(e: any) => props.dragEndHandler(e)}
            onDragLeave={(e: any) => props.dragEndHandler(e)}
            onDragOver={(e: any) => props.dragOverHandler(e)}
            onDrop={(e: any) => props.dropHandler(e, { title: props.title, description: props.description }, props.board)}
            draggable={true}
            style={{ fontSize: "2em", cursor: "grab" }}
            key={props.key}
            className="card mt-2 Task text-center">{props.title}</div>
        <Formik
            initialValues={{
                title:props.title,
                description:props.description    
            }}
            onSubmit={(values)=>{
                let updateTask={
                    title:values.title,
                    description:values.description
                } as TaskType
                let updateBoard={
                    title:props.board.title,
                    tasks:[]    
                } as BoardType
                updateBoard.tasks=props.board.tasks.map((t,index)=>{
                    if(t.title!==props.title){
                        return t
                    }else{
                     return updateTask   
                    }
                })
                dispatch(setBoard(updateBoard))
                setShow(false)
            }}
            validate={(values)=>{
                let errors={
                    title:""
                }
                if(!values.title){
                    errors.title="Please enter title"
                    return errors
                }
                props.board.tasks.forEach(b=>{
                    if(b.title!==props.title && b.title===values.title ){
                        errors.title="This title have already exist"
                    }
                })
                if(!errors.title) return {}
                else return errors
                //ToDo check on same name (props - allTasks)
            }}
            >{({
                handleChange,
                values,
                handleSubmit,
                errors
            })=><form onSubmit={handleSubmit}>
                <Modal show={show}
                onHide={() => setShow(false)}
                >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Change Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Title: 
                        <input
                        name="title"
                        onChange={handleChange}
                        value={values.title}
                        className="form-control"
                        />
                        {errors.title && <div className="text-danger">
                            {errors.title}
                        </div>}
                    </div>
                    <div>
                        Description: 
                        <textarea 
                        onChange={handleChange}
                        name="description"
                        className="form-control"
                        >{values.description}</textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button 
                    onClick={onDelete}
                    className="btn btn-danger">
                        Delete
                    </button>
                    <MyNaughtyButton />
                </Modal.Footer>
            </Modal></form>}
        </Formik>
    </div>
}

