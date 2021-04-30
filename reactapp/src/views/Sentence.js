import React from 'react';
import styled from 'styled-components';

import dragin from '../resources/drag-in-icon.png'

function Sentence() {
  return (
    <Container>
      <MainComment>
        우리의 기술을 이용해 보세요!<br/>아주 쉽고 빠르게 만들 수 있습니다.
      </MainComment>

      <SentenceMenu>
        <SentenceComment>50자 내외로<br/>마음껏 작성하여 올려보세요.</SentenceComment>
        
        <SentenceUpload>
          <UploadDragIn>
            <DragInImage src={dragin}/>
            <DragInNotice>마음껏 작성한 손글씨<br/>이미지를 올려보세요</DragInNotice>
          </UploadDragIn>
          <UploadNotice>* 글자 수정없이 잘 보이도록 캡처된 이미지만 올려주세요</UploadNotice>
        </SentenceUpload>
      </SentenceMenu>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
const MainComment = styled.p`
  font-size: 35px;
`;
const SentenceMenu = styled.div`
  margin: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SentenceComment = styled.p`
  display: inline-block;
  font-size: 30px;
  margin-right: 200px;
`;
const SentenceUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UploadDragIn = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
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

export default Sentence;