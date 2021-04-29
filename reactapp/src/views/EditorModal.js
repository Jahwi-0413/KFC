import React, { useState } from 'react'
import styled from 'styled-components'
import '../index.css'

const EditorModal = (props) =>
{
  return (
    <Container>
      <center>
        <StyledArea />
      </center>
    </Container>
  )
}

const Container = styled.div`
  margin-top:50px;
  min-width:1000px;
  min-height:800px;
`
const StyledArea = styled.textarea`
  width:500px;
  height:700px;
  font-size:20px;
  font-family:testfont;
`
export default EditorModal