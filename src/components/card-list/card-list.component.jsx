import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log(monsters);
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, id } = monster;
          const { catchPhrase } = monster.company;
          return <Card name={name} id={id} catchPhrase={catchPhrase}></Card>;
        })}
      </div>
    );
  }
}

export default CardList;
