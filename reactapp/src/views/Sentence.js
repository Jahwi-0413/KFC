import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from '../components/DownloadModal';
import Dimmer from '../components/Dimmer';
import DaD from '../components/DaD';
import { checkFileType } from '../common/utils';
import { sendSentenceImage } from '../RESTManager';

function Sentence ()
{
  const [ modal, setModal ] = useState(false);
  const [ generated, setGenerated ] = useState("");

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

    sendSentenceImage(file, setGenerated);
    if (generated === -1)
      setGenerated("폰트 생성 실패");
    else
      setGenerated("폰트 생성 중");
    setModal(true);
  };

  return (
    <Container>
      {modal && <Modal generated={generated}/>}
      {modal && <Dimmer onClick={closeModal}/>}
      <MainComment>
        우리의 기술을 이용해 보세요!<br />아주 쉽고 빠르게 만들 수 있습니다.
      </MainComment>

      <SentenceMenu>
        <SentenceComment>50자 내외로<br />마음껏 작성하여 올려보세요.</SentenceComment>
        <DaD
          comment={<span>클릭하거나 드래그하여<br />이미지를 올려보세요</span>}
          notice="* 크게, 똑바르게, 수정없이 작성할 수록 폰트가 이뻐집니다"
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
  margin-right: 100px;
`;

export default Sentence;