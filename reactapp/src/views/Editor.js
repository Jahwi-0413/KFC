import React, { useState } from 'react';
import styled from 'styled-components';

import EditorModal from '../components/EditorModal';
import Dimmer from '../components/Dimmer';
import DaD from '../components/DaD';
import { checkFileType } from '../common/utils';
import { sendFontFile } from '../RESTManager';

function Editor (props)
{
  const comment = <span>클릭하거나 드래그하여<br />폰트 파일을 올려보세요</span>;
  const notice = "* .ttf 확장자의 파일만 업로드 가능합니다";
  const [modalState, setModalState] = useState(false);  //false가 닫힌거

  const closeModal = () =>
  {
    setModalState(false);
  };
  const uploadFile = (file) =>
  {
    const checkResult = checkFileType(file, ['ttf']);
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

  return (
    <Container>
      {modalState && <EditorModal />}
      {modalState && <Dimmer onClick={closeModal}></Dimmer>}
      <Text>
        나만의 손글씨로<br />
            편리하게 편지를 작성해보세요<br /><br />
            밑의 버튼을 눌러 폰트 파일을 등록하고<br />
            편집기를 사용해 보세요<br />
      </Text>
      <StyledDiv>
        <DaD comment={comment} notice={notice} uploadFile={uploadFile} />
      </StyledDiv>
    </Container >
  )
};

const Container = styled.div`
  text-align: center;
`;
const Text = styled.div`
  font-size: 25px;
`;
const StyledDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:30px;
  margin-bottom: 60px;
`;

export default Editor;