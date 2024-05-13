
import React from "react";
import Content from "./Components/Content";
import HeaderLeft from "./Components/Header/HeaderLeft";
import HeaderRight from "./Components/Header/HeaderRight";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <HeaderLeft />
        <HeaderRight />
      </div>
      <Content />
    </div>
  );
};

export default App;
