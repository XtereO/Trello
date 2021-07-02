import { useHistory } from "react-router-dom"


type PropsType={
    title:string
    isPC:boolean
}
export const Header:React.FC<PropsType>=(props)=>{
    const history=useHistory()
    const goToLists=()=>{
        history.push({
            pathname:'/',
        })
    }
    return<div 
    style={{fontSize:"2.5em",
    borderBottom:"1px black solid"}}
    className={"bg-primary fixed-top text-white"}>
            <button
            onClick={goToLists}
            style={{outline:"none",border:"none"}}
            title={"Go to lists"}
            className="EmtyButton bg-primary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
            </button>
            {props.title}
    </div>
}