import React from "react";
import MaskedInput from 'react-text-mask';
import {createAutoCorrectedDatePipe} from 'text-mask-addons';

function App() {
  
  return <div className="App">
    <MaskedInput
      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      //pipe={createAutoCorrectedDatePipe}
      //keepCharPositions={true}
    />

    <MaskedInput
      //mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      className="form-control"
      placeholder="DD/MM/YYYY"
      pipe={createAutoCorrectedDatePipe()}
      guide={false}
      id="my-input-id"
      onBlur={() => {}}
      onChange={() => {}}
    />
  </div>;
}

export default App;
