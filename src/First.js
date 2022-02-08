import React from "react";
import "./style.css";
import Second from './Second';
import Third from './Third';
import MyContext from './MyContext.js'

export default function First() {
  var x = JSON.parse(React.useContext(MyContext))
  return (
    <div className='betterview'>
      <h1>First</h1>
      <h3>{x.firstName+' '+x.lastName}</h3>
      <Second></Second>
      <Third></Third>
    </div>
  );
}