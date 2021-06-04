import './App.css';
import React from 'react';

const {useState} = React;

function App() {
  const[count,setCount] = useState(0);
  
  
    return (
      <div className="App">
        <div className="heading"><h3>Counter App</h3></div>
          <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>{count}</h1>
            <div className="buttons">
              <div>
              <button className="btn1" onClick={()=>setCount(count-1)}>-</button>
              <button className="btn2"onClick={()=>setCount(0)}>Reset</button>
              <button className="btn3" onClick={()=>setCount(count+1)}>+</button>
              </div>
            </div>
      </div>
    );
  }


export default App;
