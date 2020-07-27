import React from 'react';
import Card from './Card';
import './List.css';

class List extends React.Component {
    render() {
        const arrayOfCards = this.props.cards.map((elem, i) => {
            return <Card key={i} title={elem.title} content={elem.content} />
        });

        return (
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                    {arrayOfCards}
                    <button type="button" className="List-add-button">
                        + Add Random Card
                </button>
                </div>
            </section>
        )
    }
}

export default List;