import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import CardList from './CardList.js';


class App extends Component {

  state = {
    cards:[]
  };

  addNewCard = (cardInfo) =>{
    this.setState(prevState =>({
        cards: prevState.cards.concat(cardInfo)
    }));

};
  render() {
    return (

        <div>
          <Form onSubmit = {this.addNewCard} />
           <CardList cards={this.state.cards} />
        </div>

    );
  }
}
export default App;






