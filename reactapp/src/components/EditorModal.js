import React from 'react'
import styled from 'styled-components'
import '../index.css'

function EditorModal ()
{
  return (
    <Temp>
      <Container>
        <StyledArea/>
      </Container>
    </Temp>
  )
}
// width: 50rem;
//   height:48rem;

const Temp = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Container = styled.div` 
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 90%;
  background: white;
  justify-content: center;
  align-items: center;
  border:1px solid black;
  z-index: 201;
`;
const StyledArea = styled.textarea`
  width: 90%;
  height: 90%;
  font-size: 20px;
  font-family: testfont;
  outline: 0;
`;

export default EditorModal