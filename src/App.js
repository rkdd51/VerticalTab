import React from "react";
import "./styles.css";
import data from "./data.js";

import VerticalTab from "./component/VerticalTab";

export default function App() {
  return (
    <div className="App">
      <VerticalTab data={data.jobs} />
    </div>
  );
}
