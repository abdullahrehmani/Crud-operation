import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // enetrMOuse(){
  //   alert('Mouse entered')
  // }
  onSubmit(event){
    event.preventDefault();
    alert('submitted');

  }



  render() {
    const list= [
      'item 1',
      'item 2',
      'item 3',
      'item 4'


    ]
    return (
      <div  className="App">
      <h1>{ 
        list.map(item=>{
          return (
            <div  key={item}  onMouseEnter={this.enetrMOuse} >{item} </div>
          )
        })

       }</h1>
       <form  onSubmit={this.onSubmit}>
       <input onChange={this.onChange} />
       </form>
       
      
      </div>
    );
  }
}

export default App;
