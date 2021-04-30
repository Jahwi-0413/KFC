import React from 'react';
import styled from 'styled-components';

import template from '../resources/28-template.jpg'
import DaD from '../components/DaD';

function Template() {
  const templateDownload = () => {
    var element = document.createElement("a");
    element.href = "/28-template.jpg";
    element.download = "템플릿.jpg";
    element.click();
  };

  return (
    <Container>
      <MainComment>
        서식을 이용하여 더 정밀한<br/>손글씨 폰트를 만들어 보세요.
      </MainComment>

      <TemplateMenu>
        <TemplateDownload>
          <TemplateImage src={template}/>
          <DownloadButton onClick={() => templateDownload()}>서식 다운로드</DownloadButton>
        </TemplateDownload>
        <DaD comment={ <span>직접 작성한 서식<br/>이미지를 올려보세요</span> }/>
      </TemplateMenu>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
const MainComment = styled.p`
  font-size: 35px;
`;
const TemplateMenu = styled.div`
  margin: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TemplateDownload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 200px;
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
const TemplateUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UploadDragIn = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 250px;
  background: lightgray;
  justify-content: center;
  align-items: center;
`;
const DragInImage = styled.img`
  width: 40px;
`;
const DragInNotice = styled.p`
  font-size: 15px;
  color: #333;
`;
const UploadNotice = styled.p`
  font-size: 10px;
  color: gray;
  margin-top: 2px;
`;

export default Template;