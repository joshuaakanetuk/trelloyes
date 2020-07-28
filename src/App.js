import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [{
        id: '3',
        header: 'Third list',
        cardIds: ['a'],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: ['a', 'b'],
      },
      ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' }
      }
    }
  };
  render() {
    const listOfList = this.props.store.lists.map((elem, i) => {

      const cardArr = elem.cardIds.map((elem) => {
        return this.props.store.allCards[elem];
      });

      return <List key={elem.id} header={elem.header} cards={cardArr} />
    });

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {listOfList}
        </div>
      </main>

    );
  }

}

export default App;