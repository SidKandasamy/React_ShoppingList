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

        const{ id,title } = this.props.shoppinglist //destructuring desrtructures the this.prop.shoppinglist into just id and title

        return (
            <div style={this.getStyle()}> 
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind( this, id )}/> {''}
                {title}
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


//when checking the box we are calling the markComplete render in the shoppingList file, due to it being a prop within the file, it then goes to the App.js file to change the state

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