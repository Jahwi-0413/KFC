import React, { useState } from 'react';
import styled from 'styled-components';

import Alert from '../components/AlertModal';
import Modal from '../components/DownloadModal';
import Modal2 from '../components/DownloadModal2';
import Dimmer from '../components/Dimmer';
import DaD from '../components/DaD';
import { checkFileType } from '../common/utils';
import { sendSentenceImage } from '../RESTManager';

function Sentence ()
{
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const [generated, setGenerated] = useState("");

  const onClickNo = () =>
  {
    setAlert(false);
  }
  const onClickYes = () =>
  {
    setGenerated("폰트 생성 실패");
    setAlert(false);
  }
  const onClickClose = () =>
  {
    setModal(false);
  }
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

    setGenerated("폰트 생성 중");
    sendSentenceImage(file, setGenerated);
    setModal(true);
  };

  return (
    <Container>
      {alert && <Alert onClickNo={onClickNo} onClickYes={onClickYes} />}
      {modal && (
        generated === "폰트 생성 중" ?
          <Modal generated={generated} /> :
          <Modal2 generated={generated} onClickClose={onClickClose} />
      )}
      {modal && (
        generated === "폰트 생성 중" ?
          <Dimmer onClick={() => setAlert(true)} /> :
          <Dimmer onClick={() => setModal(false)} />
      )}
      <MainComment>
        우리의 기술을 이용해 보세요!<br />아주 쉽고 빠르게 만들 수 있습니다.<br />다음의 문장을 손글씨로 작성해 이미지로 올려보세요
      </MainComment>

      <SentenceMenu>
        <SentenceComment>
          옛적 볶은 큰 뻐꾸기 값 품삯 요청을 읽어놓고는 잊었죠<br />
          특히 쓴 돼지 귀 겉 핥는 내 친구와 앉아 <br />뚫은 돛 옆 부엌에 갇힌 삶 얘기를<br />
          외곬마냥 읊던 짧은 웨딩 다큐는 권하지 않았습니다<br />
        </SentenceComment>
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
  margin-right: 60px;
`;

export default Sentence;