import React, { useState } from 'react';
import styled from 'styled-components';

function DownloadModal(props)
{
  const [ generated, setGenerated ] = useState(false);

  return (
    <Container>
      <PopUp>
        <Comment>{
          generated ?
          "폰트 생성 완료"
          :
          "폰트 생성 중"
        }</Comment>
      </PopUp>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const PopUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 370px;
  background: white;
  z-index: 201;
`;
const Comment = styled.div`

`;

export default DownloadModal;