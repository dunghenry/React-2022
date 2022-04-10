import React, {useEffect, useState} from 'react'
import {ref, onValue, remove} from "firebase/database";
import {database} from '../firebase'
const Todos = (props) => {
    const [todos, setTodos] = useState([]);
    const {isEdit, setIsEdit, tempId, setTempId} = props;
    useEffect(() =>{
       onValue(ref(database), snapshot =>{
        setTodos([]);
        const data = snapshot.val();
        if(data !== null) {
            Object.values(data).map(todo =>
                setTodos((todosArr) => [...todosArr, todo])
            )
        }
       })
    },[])
    const deleteTodo = (id) =>{
        remove(ref(database, `${id}`))
    }
    const markCompleted = (id) =>{
        const newTodos = todos.map((todo) =>{
            if(todo.id === id) todo.completed = !todo.completed;
            return todo;
        })
        setTodos(newTodos)
    }
    const editTodo = async (id) =>{
        setIsEdit(true);
        setTempId(id);
    }
  return (
    <div>   
        {
            todos.map((todo, index) =>{
                return (
                    <div key={todo.id} className="flex text-left py-1 items-center justify-center">
                       <p className="mt-1.5 px-2"> {index + 1}. </p>
                       <input type="checkbox" className="mt-2" checked={todo.completed} onChange={() => markCompleted(todo.id)}/>
                       <p style={{ marginLeft: '100px', marginRight: '100px'}}className={todo.completed ? "line-through" : ""}>{todo.title}</p>
                       <button type="button" className="border rounded-lg bg-blue-400 text-white px-2 py-1 mx-2" onClick={() => editTodo(todo.id)}>Edit todo</button>
                       <button type="button" className="border rounded-lg bg-red-400 text-white px-2 py-1" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>)
            })
        }
        {
            !todos.length && <p className="text-red-500 text-center font-semibold">Không có dữ liệu</p>
        }

    </div>
  )
}
export default Todos;
