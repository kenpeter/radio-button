import React from 'react';
import MaskedInput from 'react-text-mask';
import createAutoCorrectedDatePipe
  from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import styled from 'styled-components';

const MyStyledInput = styled.input`
  padding: 10px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

function App () {
  const autoCorrectedDatePipe = createAutoCorrectedDatePipe ('dd/mm/yyyy');
  return (
    <div className="App">

      <MaskedInput
        placeholderChar={'\u2000'}
        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
        placeholder={'DD/MM/YYYY'}
        pipe={autoCorrectedDatePipe}
        guide={true}
        keepCharPositions={true}
        render={(ref, props) => <MyStyledInput ref={ref} {...props} />}
      />
    </div>
  );
}

export default App;
