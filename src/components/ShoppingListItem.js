import React, { Component } from 'react'
import PropType from 'prop-types';


export class ShoppingListItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.shoppinglist.title}</p>
            </div>
        )
    }
}


//Prop Types
ShoppingListItem.propTypes ={ //name of the class
    shoppinglist: PropType.object.isRequired
}
export default ShoppingListItem
