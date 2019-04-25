import React, { Component } from 'react';

// import productitem from '.productitem/'
import Productitem from './Productitem'
import AddProduct from './AddProduct'
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
      products:  JSON.parse( localStorage.getItem('products'))
    }
    this.onAdd=this.onAdd.bind(this);
    this.onDelete=this.onDelete.bind(this);
    this.onEditSubmit=this.onEditSubmit.bind(this);
  }
  componentWillMount(){
   const products= this.getProducts();
   this.setState({products})
  }
  getProducts() { 
    return  this.state.products
    
  }
  onAdd(name,  price){
    const products =this.getProducts();
    products.push({
      name , 
      price
    });
    this.setState({products })
   

  }
  onDelete(name){
    const products=this.getProducts();
    const filterProducts = products.filter(product=>{
      return product.name !==name;
    });
    this.setState({products: filterProducts});
  }
  onEditSubmit(name , price, orignalName){
    let products = this.getProducts();
    products = products.map(product=>{
      if(product.name === orignalName){
        product.name= name;
        product.price = price;

      }
      return product
    });
    this.setState({products});

  }
  render() {
    return (
      <div className="App">
    <h1>products manger</h1>
    <AddProduct onAdd={this.onAdd}
    />
    {
      this.state.products.map(products=>{
        return(
         <Productitem 
          onDelete={this.onDelete}
            key={products.name}
            {...products}
            onEditSubmit={this.onEditSubmit}/>  
        )

      })
    }
      </div>
    );
  }
}

export default App;
