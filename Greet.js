import React from 'react'

//function Greet() {
   // return <h1>Hello Priyanka</h1>
//}
/*

 
const Greet = props  => {
    console.log(props)
    return (
        <div>
    <h1> 
        hello {props.name} a.k.a {props.heroName}
    </h1>
    {props.children}
    </div>
    )

}
*/
//Destructut the props functinal components 1 way 
/*
const Greet = ({name,heroName}) => {
    
    return (
        <div>
    <h1> 
        hello {name} a.k.a {heroName}
    </h1>

    </div>
    )

} */

//Destructut the props functinal components 2 way 
const Greet = props => {
    const { name,heroName} =props
    
    return (
        <div>
    <h1> 
        hello {name} a.k.a {heroName}
    </h1>

    </div>
    )

}


export default Greet
