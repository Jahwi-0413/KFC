import React, { useState } from 'react'
import styled from 'styled-components'
import icon from '../resources/file-upload-icon.svg'
import EditorModal from './EditorModal'
import WindowOpener from 'react-window-opener'

function Editor (props)
{
  const [isOpenPopup, setIsOpenPopup] = useState(false)

  const openModal = () => { setIsOpenPopup(true); console.log(isOpenPopup) }
  const closeModal = () => setIsOpenPopup(false)
  const uploadFile = (e) =>
  {
    const file = e.target.files[0]
    console.log(e.target)
    if (file !== null)
      openModal()
  }

  return (
    <Container>
      <Text>
        나만의 손글씨로<br />
            편리하게 편지를 작성해보세요<br /><br />
            밑의 버튼을 눌러 폰트 파일을 등록하고<br />
            편집기를 사용해 보세요<br />
      </Text>
      <StyledDiv>
        <StyledInput type="file" accept=".ttf" onChange={uploadFile} />
        <UploadIcon src={icon} />
        <Text2>파일 선택</Text2>
        <WindowOpener url="/editor/modal" >click</WindowOpener>
      </StyledDiv>
      {isOpenPopup === true &&
        <EditorModal close={closeModal} />}
    </Container>
  )
}

const Container = styled.div`
    text-align: center;
    margin: 80px;
`;
const Text = styled.div`
  font-size: 25px;
  margin-top: 80px;
`;
const UploadIcon = styled.img`
  width: 50px;
  height: 50px;
`;
const StyledDiv = styled.div`
  margin-top: 40px;
  margin-left: -100px;
`;
const StyledInput = styled.input`
  position: absolute; 
  opacity: 0;
  width: 160px;
  height: 50px;
`;
const Text2 = styled.p`
  position: absolute;
  font-size: 25px;
  margin-top: 10px;
  display: inline;
`;

export default Editor;