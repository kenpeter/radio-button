import React, {useState} from "react";
import RadioButton from './RadioButton';
import styled from 'styled-components';

const TestDiv = styled.div`
  border: ${props =>
    props.disableBorder === true ? '0' : `solid 1px ${props => props.ownColor}`};
`;

// https://codepen.io/satya164/pen/qdgYaO
function App() {
  const [value, setValue] = useState('');

  //test
  console.log('value', value);

  return <div className="App">
    <TestDiv disableBorder={false} ownColor={'red'}>bla</TestDiv>

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
