import React, { Component } from 'react';
 
class Productitem extends Component {
  constructor(props){
    super(props);
    this.state={
      isEdit: false

    }
    this.onDelete=this.onDelete.bind(this);
    this.onEdit=this.onEdit.bind(this);
  }
    onDelete()  {
      const {onDelete, name}=this.props;
      onDelete( name)
    }


   
  onEdit(){
    this.setState({isEdit:true})

  }
 
  render() {
      const {name , price} =this.props
    return (
        <div >
          {
            this.state.isEdit
            ? (
<div>
  
</div>
            )
            : (
              <div>
              <span>{name}</span>
              {`|`}
               |<span>{price}</span>
               {`|`}
               <button  onClick={this.onDelete} >Delete</button>
               {`|`}
               <button  onClick={this.onEdit} >Edit</button>
               </div>
            )
          }
       
        </div>
    );
  }
}

export default Productitem;
