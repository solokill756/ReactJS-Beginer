const ToDoData = (props) => {
    const {todoList} = props;
    console.log(todoList);
    return (
         <div className="todo-data">
            <ul>
                {todoList.map((item , index) => {
                    return (<div className="todo-data-text" key={item.id}>
                        <li>{item.title}</li>
                        <button className="todo-delete-button">Delete</button>
                    </div>)
                })}
            </ul>
         </div>
    )
}

export default ToDoData