import React from 'react'
import { IPeople, IState as Props } from '../App';
interface IProps{
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<IPeople[]>>
}
const Form = ({ people, setPeople }: IProps) => {
    const [age, setAge] = React.useState<number>(0);
    const [name, setName] = React.useState<string>('');
    const [bio, setBio] = React.useState<string>('');
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const person = { name, age, bio };
        if (name && age && bio) {
            setPeople([...people, person]);
        }
        else if(name !== "" || !age || !bio) {
            alert("Please enter data!!!")
        }
        setName("");
        setAge(0);
        setBio("");
    }
  return (
      <div className="form-container">
          <h1>Form</h1>
          <form>
              <input type="text" value={name} name="name" id="name" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
              <input value={age} name="age" id="age" placeholder="Enter age" onChange={(e) => setAge(Number(e.target.value))} />
              <textarea name="bio" id="bio" value={bio} placeholder="Enter bio Description" onChange={(e) => setBio(e.target.value)}/>
              <button type="submit" onClick={handleSubmit}>Submit</button>
          </form>
      </div>
  )
}

export default Form;