import React from 'react';
import List from './List';
import './App.css';

function App(props) {

  const listOfList = props.store.lists.map((elem, i) => {

    const cardArr = elem.cardIds.map((elem) => {
        return props.store.allCards[elem];
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

export default App;