import React, { useState } from 'react'
import styled from 'styled-components'
import '../index.css'

function EditorModal (props)
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

const Container = styled.div`
  width: 600px;
  height:800px;
  margin-top:-500px;
  display: flex;
  background-color:white;
  justify-content: center;
  align-items: center;
  position: fixed;
  border:1px solid black;
`

const StyledArea = styled.textarea`
  width:500px;
  height:700px;
  font-size:20px;
  font-family:testfont;
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