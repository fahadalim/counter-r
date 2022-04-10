import { useState } from "react";
import "./counter.css"

const Counter=()=> {
    const [counter, setCounter] = useState(0);
  
    const handleChange = (value) => {
      //conditions
      setCounter(counter + value);
    };
    const change = (go) => {
      //conditions
      setCounter(counter*go);
    };
  
    return (
      <div className="main">
          <h3>
            Counter : <span className={counter % 2 === 0 ? "even" : "odd"}>{counter}</span>
          </h3>
        {/* <h3>Counter:{counter}</h3> */}
        <button
          onClick={() => {
            handleChange(1);
          }}>Add1</button>
  
        <button
          onClick={() => {
            handleChange(-1);
          }}>sub1</button>
          <div>Number is{counter%2===0 ? "Even" : "Odd"}</div>
          <button
          onClick={(go)=>{
            change(2);
          }}
          >double</button>
  
      </div>
    );
  }

  export {Counter};