import { useState } from "react";
import "./App.css";
import CardBoard from "./components/CardBoard/CardBoard";
import Card from "./components/Card/Card";

import Rocky from "./photos/Rocky.png";
import Chase from "./photos/Chase.png";
import Marshall from "./photos/Marshall.png";
import Rubble from "./photos/Rubble.png";
import Skye from "./photos/Skye.png";
import Zuma from "./photos/Zuma.png";

const initialCards = [
  { id: 0, photo: Rocky, name: "Rocky", flipped: false },
  { id: 1, photo: Chase, name: "Chase", flipped: false },
  { id: 2, photo: Marshall, name: "Marshall", flipped: false },
  { id: 3, photo: Rubble, name: "Rubble", flipped: false },
  { id: 4, photo: Skye, name: "Skye", flipped: false },
  { id: 5, photo: Zuma, name: "Zuma", flipped: false },
  { id: 6, photo: Rocky, name: "Rocky", flipped: false },
  { id: 7, photo: Chase, name: "Chase", flipped: false },
  { id: 8, photo: Marshall, name: "Marshall", flipped: false },
  { id: 9, photo: Rubble, name: "Rubble", flipped: false },
  { id: 10, photo: Skye, name: "Skye", flipped: false },
  { id: 11, photo: Zuma, name: "Zuma", flipped: false },
];

const App = () => {
  const [cards, setCards] = useState(initialCards);
  const [clickedCard, setClickedCard] = useState([]);

  const cardsOnTable = cards.map((card, idx) => {
    return (
      <Card
        id={idx}
        key={idx}
        cards={cards}
        name={card.name}
        setCards={setCards}
        photo={card.photo}
        flipped={card.flipped}
        clickedCard={clickedCard}
        setClickedCard={setClickedCard}
      />
    );
  });

  return (
    <div className="App">
      <CardBoard>{cardsOnTable}</CardBoard>
    </div>
  );
};

export default App;
