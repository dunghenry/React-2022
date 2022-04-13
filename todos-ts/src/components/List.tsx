import React from 'react';
import { IState as IProps} from '../App';
const List = ({ people }: IProps) => {
    const render = (): JSX.Element[] => {
        return people?.map((person, index) => {
            return (
                <div key={index} className="list-item-container">
                    {person.name} - {person.age} - {person.bio}
                </div>
            )
        })
    }
  return (
      <div className="list-container">
          <h1>List</h1>
          {render()}
      </div>
  )
}

export default List;