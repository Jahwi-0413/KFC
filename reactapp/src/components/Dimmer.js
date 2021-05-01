import React, { Component } from 'react';
import styled from 'styled-components';

function Loader(props)
{
  return (
    <Container style={{ height: props.height }} onClick={() => props.onClick()}/>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(38, 38, 38);
  opacity: 0.5;
  z-index: 1;
`;

export default Loader;