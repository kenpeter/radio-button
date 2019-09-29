import React, {useState} from "react";
import RadioButton from './RadioButton';

// https://codepen.io/satya164/pen/qdgYaO
function App() {
  const [value, setValue] = useState('');

  //test
  console.log('value', value);

  return <div className="App">
    <RadioButton 
      checked={value === 'test1' ? true : false}
      onChange={() => {setValue('test1')}}
      value={'test1'}
      name={'test'}
      label={'test radio1'}
    ></RadioButton>
    
    <RadioButton 
      checked={value === 'test2' ? true : false}
      onChange={() => {setValue('test2')}}
      value={'test2'}
      name={'test'}
      label={'test radio2'}
    ></RadioButton>
  </div>;
}

export default App;
