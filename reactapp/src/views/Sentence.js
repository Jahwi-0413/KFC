import React from 'react';
import styled from 'styled-components';

import DaD from '../components/DaD';

function Sentence() {
  return (
    <Container>
      <MainComment>
        우리의 기술을 이용해 보세요!<br/>아주 쉽고 빠르게 만들 수 있습니다.
      </MainComment>

      <SentenceMenu>
        <SentenceComment>50자 내외로<br/>마음껏 작성하여 올려보세요.</SentenceComment>
        <DaD comment={ <span>마음껏 작성한 손글씨<br/>이미지를 올려보세요</span> }/>
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

export default Sentence;