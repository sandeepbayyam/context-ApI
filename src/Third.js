import React from 'react';
import './style.css';
import MyContext from './MyContext.js'

class Third extends React.Component{
  render(){
    return(
      <MyContext.Consumer>
        {(data)=>{
          var x = JSON.parse(data)
          return (
                <div className='betterview'>
                  <h1>Third</h1>
                  <h3>{x.firstName+' '+ x.lastName}</h3>
                  <h3>{x.age}</h3>
                  <h3>{x.city}</h3>
                </div>
          )
        }
      } 
      </MyContext.Consumer>
    )
  }
}
export default Third;