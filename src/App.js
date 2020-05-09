import React from "react";
import "./styles.css";
import { Hand } from "react-deck-o-cards";

export default function App() {
  const defHandStyle = {
    maxHeight: "34vh",
    minHeight: "34vh",

    maxWidth: "100vw",
    padding: 0
  };

  return (
    <div>
      <Hand cards={[{ rank: 2, suit: 0 }]} hidden={true} style={defHandStyle} />
      <Hand
        cards={[{ rank: 2, suit: 0 }]}
        hidden={false}
        style={defHandStyle}
      />
    </div>
  );
}
