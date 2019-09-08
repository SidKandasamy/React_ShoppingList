import React, { Component } from 'react'
import PropType from 'prop-types';


export class ShoppingListItem extends Component {

    getStyle=()=>{
   
            return{
               
                background: '#f4f4f4',
                padding:'10px',
                borderBotton: '1px #ccc dotted',
                textDecoration: this.props.shoppinglist.completed ? 'line-through' : 'none'
            
        }
    }
    //get style funtions checks the state of the shopping list whether it is compeleted or not, if completed there is a 'line-through'


   

    render() {
        return (
            <div style={this.getStyle()}> 
                <p>
                <input type="checkbox" onChange={this.props.markComplete}/> {''}
                {this.props.shoppinglist.title}
                </p>
            </div>
        )
    }

}

    //Prop Types
    ShoppingListItem.propTypes ={ //name of the class
        shoppinglist: PropType.object.isRequired
        
    }

export default ShoppingListItem


//double curly braces when doing inline styling
//camel case used


//if(this.props.shoppinglist.completed){
//    return{
//        textDecoration: 'line-through'
//    }
//}else{
//    return{
//        textDecoration: 'none'
//    }
//}
//}

// Variables
// const itemStyle ={
//     backgroundColor: '#c8a2c8'
// }