import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

import dragin from '../resources/drag-in-icon.png';

function DaD(props) {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles[0].name)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      <UploadDiv>
        <UploadDragIn>
          <DragInImage src={dragin}/>
          <DragInNotice>{props.comment}</DragInNotice>
        </UploadDragIn>
        <UploadNotice>* 글자 수정없이 잘 보이도록 캡처된 이미지만 올려주세요</UploadNotice>
      </UploadDiv>
    </div>
  )
}

const UploadDiv = styled.div`
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

export default DaD;