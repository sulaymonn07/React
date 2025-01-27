const TodoItem =(props) => {
    console.log(props);
    
    return(
        <>
        <div className="todo">
            <span> {props.title}</span>
          </div>
        </>
    )
}


export default TodoItem;