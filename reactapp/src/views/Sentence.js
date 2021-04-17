import React from 'react';
import styled from 'styled-components';

function Sentence() {
  return (
    <Container>
      <Header>
        Sentence
      </Header>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
const Header = styled.header`
  text-align: center;
`;

export default Sentence;