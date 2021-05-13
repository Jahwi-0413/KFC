import React, { useState } from 'react';
import styled from 'styled-components';
import fontSizeIcon from '../resources/format-size.svg'

// import center from '../resources/align-center.png'
// import left from '../resources/align-left.png'
// import right from '../resources/align-right.png'
import justify from '../resources/align-justify.png'

import '../index.css';

function EditorModal ()
{
  const fsTypeClass =
  {
    1: 'background1',
    2: 'background2',
    3: 'background3'
  }

  const justifyType =
  {
    1: 'justify',
    2: 'center',
    3: 'left',
    4: 'right'
  }
  const [fsType, setFsType] = useState(fsTypeClass[1])
  const [textJustify, setJustify] = useState(justifyType[1])
  const [justifyIcon, setJustifyIcon] = useState('justify')

  const changeFsType = () =>
  {
    switch (fsType)
    {
      case fsTypeClass[1]: setFsType(fsTypeClass[2]); break;
      case fsTypeClass[2]: setFsType(fsTypeClass[3]); break;
      case fsTypeClass[3]: setFsType(fsTypeClass[1]); break;
    }
  }

  const changeJustifyType = () =>
  {
    switch (textJustify)
    {
      case justifyType[1]:
        setJustify(justifyType[2]); //center
        break;
      case justifyType[2]:
        setJustify(justifyType[3]); //left
        break;
      case justifyType[3]:
        setJustify(justifyType[4]); //right
        break;
      case justifyType[4]:
        setJustify(justifyType[1]); //jusify
        break;
    }
  }
  return (
    <Temp>
      <Container>
        <StyledSpan>
          <TextAreaWrapper>
            <StyledArea className={fsType} style={{ textAlign: textJustify }} />
          </TextAreaWrapper>
          <ButtonWrapper>
            <FontSizeBtn type="button" onClick={changeFsType}>
              <Img src={fontSizeIcon} />
            </FontSizeBtn>
            <TextJustifyBtn type="button" onClick={changeJustifyType}>
              <Img src={justify} />
            </TextJustifyBtn>
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
  width: 43rem;
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
  height: 95%;
  font-size: 30px;
  font-family: testfont;
  outline: 0;
  float: left;
  border:1px solid red;
  margin-top:30px;
  margin-left:30px;
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
  width:8rem;
  height:95%;
  float:right;
  position:relative;
  right:0;
  margin-right:30px;
  margin-top:30px;
`
const Button = styled.button`
  background:white;
  border:0;
  display:block;
  cursor:pointer;
`

const FontSizeBtn = styled(Button)`
  position:relative;
`
const TextJustifyBtn = styled(Button)`
`
const Img = styled.img`
  width: 50px;
  hiehgt:50px;
`

export default EditorModal