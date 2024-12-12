function Square({handleClick,value,index}){
    return <button onClick={()=>handleClick(index)}>{value}</button>
}
export default Square;