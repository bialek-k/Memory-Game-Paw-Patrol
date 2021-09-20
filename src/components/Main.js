import React from "react";
import CardBoard from "./CardBoard/CardBoard";

import { initialCards } from "./CardBoard/Photos";

const Main = () => {
  return (
    <React.Fragment>
      <CardBoard photos={initialCards} />
    </React.Fragment>
  );
};

export default Main;
