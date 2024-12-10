function Child(props){
    return(
        <>
        <input type="text"
        placeholder='Enter a new task'
        value={props.task}
        onChange={props.handleCurrentValue}
        ></input>
        <button className='add-button' onClick={props.handleClick}>Add task</button>
        </>
    );
}
export default Child;