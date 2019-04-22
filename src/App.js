import React, { Component } from 'react';

import './App.css';

const products = [
  {
    name: 'ipad',
    price: 200
  },
  {
    name: 'iphone',
    price: 650
  }
]
localStorage.setItem('products',JSON.stringify(products))

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products:[]
    }

  }
  componentWillMount(){
    this.getProducts();
  

  }


  getProducts() { 
    const products=  JSON.parse( localStorage.getItem('products'));
    this.setState({products});

  }




 
  render() {
    return (
      <div className="App">
    <h1>products manger</h1>
    {
      this.state.products.map(products=>{
        return(
          <div key={products.name}>
          <span>{products.name}</span> |<span>{products.price}</span>
          </div>
        )
      })
    }
      </div>
    );
  }
}

export default App;
