import { Component } from 'react';
import './card.styles.css';

class Card extends Component {
  render() {
    console.log(this.props);
    const { id, name, catchPhrase } = this.props;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}/set=set2&size=180x180`}
          alt={`monster ${id}`}
        />
        <h2>{name}</h2>
        <p>Catch Phrase {catchPhrase}</p>
      </div>
    );
  }
}

export default Card;
