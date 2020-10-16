import React from 'react'
import Person from './Person';

function NameList() {

    const persons =[
    {
        id: 1,
        name: 'priyanka',
        age: 30,
        skill: 'react'
    },
    {
        id: 2,
        name: 'aman',
        age:25,
        skill:'Angular'

    },

    {
        id: 3,
        name: 'amit',
        age: 34,
        skill: 'java'
    }
]
const personList =persons.map(person => <Person  key ={person.name} person ={person} />)
return <div> {personList}</div>

}
 
  /*  const  names =['priyanka','aman','amit']
    const nameList = names.map(name =><h2>{name}</h2>)
    return <div>{nameList}</div>  */




export default NameList
