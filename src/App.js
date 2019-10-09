import React from 'react';
import MaskedInput from 'react-text-mask';
import createAutoCorrectedDatePipe
  from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import styled from 'styled-components';

const MyStyledInput = styled.input`
  background: papayawhip;
`;

function App () {
  const autoCorrectedDatePipe = createAutoCorrectedDatePipe ('dd/mm/yyyy');
  return (
    <div className="App">

      <MaskedInput
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
