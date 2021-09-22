import { createContext } from "react";

import Rocky from "../../src/photos/Rocky.png";
import Chase from "../../src/photos/Chase.png";
import Marshall from "../../src/photos/Marshall.png";
import Rubble from "../../src/photos/Rubble.png";
import Skye from "../../src/photos/Skye.png";
import Zuma from "../../src/photos/Zuma.png";

export const CardContext = createContext({});

export const CardCtx = ({ children }) => {
  const initialCards = [
    { id: 1, photo: Rocky, flipped: false },
    { id: 2, photo: Chase, flipped: false },
    { id: 3, photo: Marshall, flipped: false },
    { id: 4, photo: Rubble, flipped: false },
    { id: 5, photo: Skye, flipped: false },
    { id: 6, photo: Zuma, flipped: false },
  ];

  return (
    <CardContext.Provider value={initialCards}>{children}</CardContext.Provider>
  );
};
