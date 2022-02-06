import React from 'react';
interface Name{
    name?: string
}
interface Student extends Name {
    age: number
}
let student: Student = {
    // name: "Tran Van Dung",
    age: 20
}
const BaseReactTS = () => {
  return <div>
      <h1>{JSON.stringify(student)}</h1>
  </div>;
};

export default BaseReactTS;
