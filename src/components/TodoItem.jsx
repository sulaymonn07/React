const TodoItem =(props) => {
    console.log(props);
    
    return(
        <>
        <div className="todo">
            <span> {props.id}. {props.title}</span>
            <i onClick={() => {alert(props.id)}} class="fa-solid fa-trash"></i>
          </div>
        </>
    )
}


export default TodoItem;