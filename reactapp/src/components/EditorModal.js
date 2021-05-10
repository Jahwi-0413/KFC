import React, { useState } from 'react';
import styled from 'styled-components';

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
        <TextAreaWrapper>
          <StyledArea className={fsType} />
        </TextAreaWrapper>
        <button type="button" onClick={changeFsType}>fontsize</button>
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
const TextAreaWrapper = styled.div`
  width: 70%;
  height: 90%;
  font-size: 30px;
  font-family: testfont;
  outline: 0;
  position:relative;
  left:20px;
  top:20px;
`
const StyledArea = styled.textarea`
  width:100%;
  height:100%;
  font-family: testfont;
  background-attachment: local;
  padding: 8px 10px;
  resize:none;
`;

export default EditorModal