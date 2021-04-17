import React from 'react';
import styled from 'styled-components';

function Template() {
  return (
    <Container>
      <Header>
        Template
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

export default Template;