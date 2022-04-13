import React from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
export interface IPeople{
  name: string;
  age: number;
  bio: string;
}
  
export interface IState {
  people: IPeople[]
}

function App() {
  const [people, setPeople] = React.useState<IState["people"]>([{name: "John", age: 20, bio: "Oke"}]);

  return (
    <div className="container">
      <Form people={people} setPeople={setPeople}/>
      <List people={people} />
    </div>
  );
}
export default App;
