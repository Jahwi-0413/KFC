import React, { useState } from 'react';
import styled from 'styled-components';
import fontSizeIcon from '../resources/format-size.svg'

import '../index.css';



function EditorModal ()
{
  const fsTypeClass =
  {
    1: 'background1',
    2: 'background2',
    3: 'background3'
  }

  const [fsType, setFsType] = useState(fsTypeClass[1])

  const changeFsType = () =>
  {
    switch (fsType)
    {
      case fsTypeClass[1]: setFsType(fsTypeClass[2]); break;
      case fsTypeClass[2]: setFsType(fsTypeClass[3]); break;
      case fsTypeClass[3]: setFsType(fsTypeClass[1]); break;
    }
  }
  return (
    <Temp>
      <Container>
        <StyledSpan>
          <TextAreaWrapper>
            <StyledArea className={fsType} />
          </TextAreaWrapper>
          <ButtonWrapper>
            <FontSizeBtn type="button" onClick={changeFsType}>
              <img src={fontSizeIcon} />
            </FontSizeBtn>
          </ButtonWrapper>
        </StyledSpan>
      </Container>
    </Temp>
  );
}

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
  width: 38rem;
  height: 90%;
  background: white;
  border:1px solid black;
  z-index: 201;
`;

// justify-content: center;
// align-items: center;
const StyledSpan = styled.span`
  width:100%;
  height:100%;
`
const TextAreaWrapper = styled.div`
  width: fit-content;
  height: 100%;
  font-size: 30px;
  font-family: testfont;
  outline: 0;
  float: left;
  border:1px solid red;
  top:30px;
`
const StyledArea = styled.textarea`
  width:28rem;
  height:40rem;
  font-family: testfont;
  background-attachment: local;
  padding: 8px 10px;
  resize:none;
`;

const ButtonWrapper = styled.div`
  width:3rem;
  height:100%;
  float:right;
  position:relative;
  right:0;
`

const FontSizeBtn = styled.button`
  width:50px;
  height:50px;
  background:white;
  border:0;
  left:0px;
  position:relative;
`

export default EditorModal