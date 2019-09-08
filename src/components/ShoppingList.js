import React, { Component } from 'react';
import ShoppingListItem from './ShoppingListItem';
import PropType from 'prop-types';


class Shoppinglist extends Component {

    render(){
        return this.props.shoppinglist.map((shoppinglistmap)=> (
            <ShoppingListItem key={shoppinglistmap.id} shoppinglist={shoppinglistmap}/>
        ));
    }
}

//Prop Types
Shoppinglist.propTypes ={
    shoppinglist: PropType.array.isRequired
}

export default Shoppinglist;
