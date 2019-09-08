import React, {Component} from 'react';
import Shoppinglist from './components/ShoppingList'
import './App.css';

class App extends Component {
  
  state = {
      shoppinglist: [
          {
            id: 1,
            title: 'Bananas',
            completed: false,
          },
          {
            id: 2,
            title: 'Chocolate',
            completed: false,
          },
          {
            id: 3,
            title: 'Tofu',
            completed: false,
          },
          {
            id: 4,
            title: 'Bread',
            completed: false,
          },
          {
            id: 5,
            title: 'Eggs',
            completed: false,
          },
          {
            id: 6,
            title: 'Tomatoes',
            completed: false,
          },
          {
            id: 7,
            title: 'Toilet paper',
            completed: false,
          },
          
      ]
  }

  render() {

    return (

      <div className="App">
        <Shoppinglist shoppinglist={this.state.shoppinglist}/> 
      </div>

      );
    }
}

export default App;
//shopping list array is being passed through as a prop