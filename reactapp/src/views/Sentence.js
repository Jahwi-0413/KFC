import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from '../components/DownloadModal';
import Dimmer from '../components/Dimmer';
import DaD from '../components/DaD';
import { checkFileType } from '../common/utils';
import { sendTemplateImage } from '../RESTManager';

function Sentence ()
{
  const [ modal, setModal ] = useState(false);

  const closeModal = () => {
    setModal(false);
  };
  const uploadFile = (file) =>
  {
    const checkResult = checkFileType(file, ['jpg', 'png']);
    if (file === null)
    {
      alert('파일을 등록해주세요');
      return;
    }
    if (!checkResult)   //ttf 파일이 아니라면
    {
      alert('이미지 파일을 등록해주세요');
      return;
    }
    sendTemplateImage(file, setModal);
  };

  return (
    <Container>
      {modal && <Modal/>}
      {modal && <Dimmer onClick={closeModal}/>}
      <MainComment>
        우리의 기술을 이용해 보세요!<br />아주 쉽고 빠르게 만들 수 있습니다.
      </MainComment>

      <SentenceMenu>
        <SentenceComment>50자 내외로<br />마음껏 작성하여 올려보세요.</SentenceComment>
        <DaD
          comment={<span>마음껏 작성한 손글씨<br />이미지를 올려보세요</span>}
          notice="* 글자 수정없이 잘 보이도록 캡처된 이미지만 올려주세요"
          uploadFile={uploadFile}
        />
      </SentenceMenu>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
const MainComment = styled.p`
  font-size: 25px;
`;
const SentenceMenu = styled.div`
  margin: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SentenceComment = styled.p`
  display: inline-block;
  font-size: 25px;
  margin-right: 50px;
`;

export default Sentence;