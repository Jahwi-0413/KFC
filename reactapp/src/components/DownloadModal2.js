import React, { useState } from 'react';
import styled from 'styled-components';
import file from '../resources/resultfonts/font-file.ttf'

function DownloadModal2 (props)
{
  const [generated, setGenerated] = useState(props.generated);

  return (
    <Container>
      <PopUp>
        <table>
          <tbody>
            <tr><Comment>{generated}</Comment></tr>
            <tr><Download href={file} type="button" download>다운로드</Download></tr>
          </tbody>
        </table>

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
  display:block;
`;

const Download = styled.a`
  display:block;
  outline : none;
  text-decoration:none;
  color:black;
  background: #F3D1D1;
  border:1px solid #F3D1D1;
  padding:10px;
  box-shadow: 2px 2px 3px 1px #666;
`

export default DownloadModal2;