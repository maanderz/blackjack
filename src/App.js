import React from "react";
import "./styles.css";
import { Hand } from "react-deck-o-cards";

export default function App() {
  // return (
  //   <div className="App">
  //     <h1>Hello CodeSandbox</h1>
  //     <h2>Start editing to see some magic happen!</h2>
  //   </div>
  // );
  const defHandStyle = {
    maxHeight: "34vh",
    minHeight: "34vh",

    maxWidth: "100vw",
    padding: 0
  };

  return (
    <Hand cards={[{ rank: 2, suit: 0 }]} hidden={false} style={defHandStyle} />
  );
}
