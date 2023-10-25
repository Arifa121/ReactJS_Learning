import React from 'react'
import { useState } from 'react';

const Content = () => {
    // function namee(){
    //     return console.log("visit balachandra")
    // }
    // const [count, setCount] = useState(99);
   
     
    // function incrementFunction(){
    //     setCount((prevcount) => { return prevcount + 1 })
       

    // }

    // function decrementFunction(){
    //     setCount((prevcount) => { return prevcount - 1 })
    // }
    const [name, setName] = useState("Earn");

    function handleNameChange(){
        const names =["Earn","Grow","Give"];
        const int=Math.floor(Math.random()*3);
        setName(names[int])
        
    }
    return (
       <main>
        
       </main>
  )
}

export default Content