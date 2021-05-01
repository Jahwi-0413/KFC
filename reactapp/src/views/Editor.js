import React, { useState } from 'react'
import styled from 'styled-components'
import { sendFontFile } from '../RESTManager'
import EditorModal from '../components/EditorModal'
import DaD from '../components/DaD'

function Editor (props)
{
  const comment = "손글씨 파일을 올려보세요";
  const notice = ".ttf 확장자의 파일만 업로드 가능합니다.";
  const [modalState, setModalState] = useState(false);  //false가 닫힌거

  const uploadFile = (file) =>
  {
    const checkResult = checkFileType(file);
    if (file === null)
    {
      alert('파일을 등록해주세요');
      return
    }
    if (!checkResult)   //ttf 파일이 아니라면
    {
      alert('ttf파일을 등록해주세요');
      return
    }
    sendFontFile(file, setModalState);

  };

  const checkFileType = (file) =>
  {
    const type = file.name.slice(-3)
    return (type === 'ttf' ? true : false) //파일 타입이 ttf라면 true
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
        <DaD comment={<span>{comment}</span>} notice={notice} uploadFile={uploadFile} />
        {modalState ? <EditorModal /> : null}
      </StyledDiv>
    </Container >
  )
};

const Container = styled.div`
    margin-top: 60px;
    display:table;
    margin-left:auto;
    margin-right:auto;
`;
const Text = styled.div`
  font-size: 25px;
  display:block;
  display:table-row;
`;

const StyledDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:30px;
`
export default Editor;