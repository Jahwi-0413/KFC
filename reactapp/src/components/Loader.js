import React, { Component } from 'react';
import styled from 'styled-components';

function Loader(props)
{
  return (
    <Container/>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgb(38, 38, 38);
  opacity: 0.5;
  z-index: 200;
`;

export default Loader;