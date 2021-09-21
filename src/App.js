import "./App.css";
import CardBoard from "./components/CardBoard/CardBoard";

import { initialCards } from "./components/CardBoard/Photos";

function App() {
  return (
    <div className="App">
      <CardBoard cards={initialCards} />
    </div>
  );
}

export default App;
