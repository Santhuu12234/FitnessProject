
export const Click=()=>{
    return(
        <>
        <h1>hello</h1>
        </>
    )
}
// export const Events=()=>{
//     const  Click=()=>{
//         alert ("rithin")
//     }
//     return(
//         <button onClick={(Click)}>rithin</button>
//     )
// }

export const Events=()=>{
    const  Click=()=>{
        alert ("rithin")
    }
    return(
        <>
        <button onClick={(Click)}>just click me</button>
         <br/>
        <button onMouseDown={(Click)}>left click</button>
        <br/>
        <button onContextMenu={(Click)}>rigiht click</button>
        <br/>
        <button onDoubleClick={(Click)}>double click me</button>
        <br/>
        <button onMouseEnter={Click}>keep the pointer  here</button>
        <br/>
        </>
    )
}
    
