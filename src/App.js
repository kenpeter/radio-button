import React from "react";
import RadioCustom from './RadioCustom';

function App() {
  return <div className="App">

    <RadioCustom
      value={1}
      name="r"
      label="r1 lkdfjldsjf"
      onChange={() => {
        
      }}
      checked={
        true
      }
    />

    <RadioCustom
      value={2}
      name="r"
      label="r2 dfsdf"
      onChange={() => {
        
      }}
      checked={
        false
      }
    />
  </div>;
}

export default App;
