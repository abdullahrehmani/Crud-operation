import React, { Component } from 'react';


class Mycomponent extends Component {
  

  render() {
    const {title , name}= this.props;
    return (
      <div  className="component">
  <h1>Title: {title} {name}</h1>
       
      
      </div>
    );
  }
}

export default Mycomponent;
