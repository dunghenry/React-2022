import React from 'react';
// Cách 1
type Student = {
    name: string
    age: number
}
//Cách 2
interface Person {
    name: string
    age: number
}

const printSomething: () => void = () => {
    console.log("Hello")
}

const printStudent: (name: string, age: number) => void = (name: string, age: number) => {
    console.log(name + age)
}

type Name = {
    name: string
}

type StudentDetails = Name & {
    age: number
    address: string
}
let student: StudentDetails = {
    name: "Dung",
    age: 20,
    address: ""
}
const DemoReactTS = () => {
    return <div></div>;
};

export default DemoReactTS;
