import React, { useState, useEffect } from "react";
import { database } from "../firebase/index";
import { ref, onValue, set, update } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
const filterData = (datas, tempId) =>{
  datas.filter(data =>{
    if(data.id === tempId){
      return data.title;
    }
  })
}
const Forms = (props) => {
  const { isEdit, setIsEdit, tempId, setTempId } = props;
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("")
  const handleSubmit = (e) => {
    const id = uuidv4();
    e.preventDefault();
    if(title !== ''){
      set(ref(database, `${id}`), {
        id: id,
        title: title,
        completed: false,
      })
    }
    else{
      alert("Please enter todo!")
    }
    setTitle("");
  };

  useEffect(() => {
    onValue(ref(database), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) =>
          setTodos((todosArr) => [...todosArr, todo])
        );
      }
    });
    todos.find(todo =>{
      if(todo.id === tempId)
        setTodo(todo.title)
    })
  }, [tempId]);

  const updateTodo = () =>{
    if(todo !== ''){
      update(ref(database,`${tempId}`), {
        id: tempId,
        title: todo,
      });
    }
    else{
      alert("Please enter todo!")
    }
    
    setTodo("");
    setIsEdit(false);
    setTempId("")
   
  }
  console.log(todo);
  return (
    <form onSubmit={handleSubmit} className="py-3 flex justify-around">
      {isEdit ? (
        <input
          className="border px-2 py-1 rounded-lg w-3/5"
          type="text"
          value={todo}
          onChange={(e) =>setTodo(e.target.value)}
          
        />
      ) : (
        <input
          className="border px-2 py-1 rounded-lg w-3/5"
          type="text"
          placeholder="Enter todo..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      )}
      {isEdit ? (
        <>
          <button
            className="border px-2 py-1 rounded-lg bg-purple-600 text-white hover:bg-pink-400 hover:text-black"
            type="button"
            onClick={() => updateTodo()}
          >
            Save todo
          </button>
          <button
            className="border px-3 py-1 rounded-lg bg-purple-600 text-white"
            onClick={() => setIsEdit(false)}
          >
            x
          </button>
        </>
      ) : (
        <>
          <button
            className="border px-2 py-1 rounded-lg bg-purple-600 text-white hover:bg-pink-400 hover:text-black"
            type="submit"
          >
            Add todo
          </button>
        </>
      )}
    </form>
  );
};

export default Forms;
