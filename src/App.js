import React from "react";
import "./style.css";
import First from './First.js'
import MyContext,{mydetails} from './MyContext.js'

export default function App() {
  return (
    <MyContext.Provider value={JSON.stringify(mydetails)}>
    <div className='betterview'>
      <h1>App</h1>
      <h3>{mydetails.firstName}</h3>
     <First></First>
    </div>
    </MyContext.Provider>
  );
}
