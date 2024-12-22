import { useState } from "react";

const ToDoNew = (props) => {
    const { updateData } = props;
    const [name , setName] = useState('');
    const handleChange = (e) => {
        setName(e.target.value);
    }
    return (
        <div className="todo-new">
            <input className="todo-text" type="text" aria-label="New todo item" onChange={handleChange} value={name} />
            <button className="todo-button" onClick={() => {
                updateData(name)
                setName('')

            }} >Add</button>
        </div>
    )
}

export default ToDoNew