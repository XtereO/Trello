
type PropsType={
    dropHandler:(e:any)=>void
    dragOverHandler:(e:any)=>void
    isPC:boolean
    show:boolean
}
export const Bucket:React.FC<PropsType>=(props)=>{
    const forPC={
        position:"fixed" as "fixed",
        top:"85%",
        left:"15%",
        outline:"none",
        border:0,
        borderRadius:"20000px"
    }
    const forMB={
        position:"fixed" as "fixed",
        top:"80%",
        left:"5%",
        outline:"none",
        border:0,
        borderRadius:"20000px"
    }
    return props.show ? <button 
    onDrop={(e:any)=>props.dropHandler(e)}
    onDragOver={(e:any)=>{
        e.target.style.background="gray"
        props.dragOverHandler(e)
    }}
    onDragLeave={(e:any)=>{
        e.target.style.background="lightgray"
    }}    
    style={props.isPC ? forPC : forMB} 
    className="Bucket pt-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
        </svg>
    </button> : <span style={props.isPC ? forPC : forMB}></span>
}