import './App.css';
import Title from './components/Title';
import Forms from './components/Forms';
import Todos from './components/Todos';
import {useState} from 'react';
const App = () => {
  const [todos, setTodos] = useState([]);
  
  const [isEdit, setIsEdit] = useState(false);
    const [tempId, setTempId] = useState('');
  return (
    <div className="mx-auto w-2/5 py-3">
      <Title/>
      <Forms isEdit={isEdit} setIsEdit={setIsEdit} tempId={tempId} setTempId={setTempId}/>
      <Todos isEdit={isEdit} setIsEdit={setIsEdit} tempId={tempId} setTempId={setTempId}/>
    </div>
  );
}

export default App;
