import React from 'react'
import styled from 'styled-components'
import '../index.css'

function EditorModal ()
{
  const closeModal = () =>
  {
    window.location.reload(); //새로고침
  }
  return (
    <Container>
      <center>
        <StyledArea />
        <BtnPosition>
          <CloseBtn onClick={closeModal}>X</CloseBtn>
        </BtnPosition>
      </center>
    </Container>
  )
}
// width: 50rem;
//   height:48rem;

const Container = styled.div` 
  width: 35rem;
  height:48rem;
  margin-top:-25rem;
  display: flex;
  background-color:white;
  align-items: center;
  position: fixed;
  border:1px solid black;
`

const StyledArea = styled.textarea`
  width:30rem;
  height:45rem;
  font-size:20px;
  font-family:testfont;
  position:relative;
  left:20px;
  outline:0;
`
const BtnPosition = styled.div`
  position:absolute;
  right:16px;
  top:8px;
`
const CloseBtn = styled.button`
  outline:0;
  border:0;
  font-size:20px;
  background-color:white;
  position:relative;
  top:0px;
`
export default EditorModal