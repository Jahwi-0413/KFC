import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Alert from '../components/AlertModal';
import Modal from '../components/DownloadModal';
import Modal2 from '../components/DownloadModal2';
import Dimmer from '../components/Dimmer';
import template from '../resources/48-template.jpg';
import DaD from '../components/DaD';
import { checkFileType } from '../common/utils';
import { sendTemplateImage } from '../RESTManager';

function Template ()
{
  const [ modal, setModal ] = useState(false);
  const [ alert, setAlert ] = useState(false);
  const [ generated, setGenerated ] = useState("");
  // const [ loaded, setLoaded ] = useState(false);

  // useEffect(() => {
  //   const image = new Image();

  //   image.src = template;
  //   // image.onload = () => {
  //   //   setLoaded(true);
  //   // }

  //   setTimeout(() => setLoaded(true), 100);
  // }, []);

  const onClickNo = () => {
    setAlert(false);
  }
  const onClickYes = () => {
    setGenerated(-1);
    setAlert(false);
    setModal(false);
  }
  const closeModal = () =>
  {
    setModal(false);
  };
  const templateDownload = () =>
  {
    var element = document.createElement("a");
    element.href = "/48-template.jpg";
    element.download = "템플릿.jpg";
    element.click();
  };

  const setProps = (result) =>
  {
    if (result === false) setGenerated("폰트 생성 실패");
    else setGenerated("폰트 생성 완료");
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
    setGenerated('폰트 생성 중');
    sendTemplateImage(file, setProps);
    setModal(true);
  };

  return (
    <Container>
      {alert && <Alert onClickNo={onClickNo} onClickYes={onClickYes}/>}
      {modal && generated === "폰트 생성 중" && <Modal generated={generated}/>}
      {modal && generated === "폰트 생성 완료" && <Modal2 generated={generated}/>}
      {modal && <Dimmer onClick={closeModal} />}
      <MainComment>
        서식을 이용하여 더 정밀한<br />손글씨 폰트를 만들어 보세요.
      </MainComment>

      <TemplateMenu>
        <TemplateDownload>
          <TemplateImage src={template} />
          <DownloadButton onClick={() => templateDownload()}>서식 다운로드</DownloadButton>
        </TemplateDownload>
        <DaD
          comment={<span>클릭하거나 드래그하여<br />작성한 이미지를 올려보세요</span>}
          notice="* 크게, 똑바르게, 수정없이 작성할 수록 폰트가 이뻐집니다"
          uploadFile={uploadFile}
        />
      </TemplateMenu>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
const MainComment = styled.p`
  font-size: 25px;
`;
const TemplateMenu = styled.div`
  margin: 100px;
  margin-top:80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TemplateDownload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 150px;
`;
const TemplateImage = styled.img`
  width: 160px;
  border: 1px solid black;
  margin-bottom: 20px;
`;
const DownloadButton = styled.button`
  border: 0;
  box-shadow: 2px 2px 3px 1px #666;
  background: #F3D1D1;
  font-size: 16px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  padding: 5px 40px;
`;

export default Template;