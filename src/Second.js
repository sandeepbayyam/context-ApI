import React from "react";
import "./style.css";
import MyContext from './MyContext.js'

export default function App() {
  var x = JSON.parse( React.useContext(MyContext));
  return (
    <div className='betterview'>
      <h1>Second</h1>
      <h3>{x.firstName}</h3>
      <h3>{x.lastName}</h3>
      <h3>{x.age +" "+ x.city}</h3>
    </div>
  );
}