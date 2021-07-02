
type PropsType={
    function:()=>void
    isPC:boolean
}
export const Plus:React.FC<PropsType>=(props)=>{
    const forPC={
        position:"fixed" as "fixed",
        top:"85%",
        left:"90%",
        outline:"none",
        border:0
    }
    const forMB={
        position:"fixed" as "fixed",
        top:"80%",
        left:"75%",
        outline:"none",
        border:0
    }
    return<button 
    onClick={props.function}
    style={props.isPC ? forPC : forMB} 
    className="Plus">
        +
    </button>
}