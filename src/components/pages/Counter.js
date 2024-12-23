import React, { useState } from 'react'
import Button from './Button'
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';

function Counter() {
  let [count, setcount] = useState(0);
  const increment = () =>{
    setcount(count++);
  }
  const decrement = () =>{
    setcount(count--);
  }
  const reset = () =>{
    count=0;
    setcount(count);
  }
  return (
    <div>
      <ResponsiveAppBar/>
        <h1>Counter Application</h1>
        <h4>Count:{count}</h4>
        <Button onClick={increment}value="+" style={{border:'none',color:'white',backgroundColor:'red'}}/>
        <Button onClick={reset}value="="style={{border:'none',color:'white',backgroundColor:'yellow'}}/>
        <Button onClick={decrement}value="-"style={{border:'none',color:'white',backgroundColor:'green'}}/>
        
    </div>
  )
}

export default Counter