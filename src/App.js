import React from "react";
import MaskedInput from 'react-text-mask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

function App() {
  
  const autoCorrectedDatePipe = createAutoCorrectedDatePipe('dd/mm/yyyy');
  return <div className="App">
    

    <MaskedInput
      //mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      placeholder={'DD/MM/YYYY'}
      pipe={autoCorrectedDatePipe}
      guide={true}
      keepCharPositions={true}
    />
  </div>;
}

export default App;
