import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

import dragin from '../resources/drag-in-icon.png';

function DaD (props)
{
  const onDrop = useCallback(acceptedFiles =>
  {
    const file = acceptedFiles[0]
    props.uploadFile(file)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      <UploadDiv>
        <UploadDragIn>
          <DragInImage src={dragin} />
          <DragInNotice>{props.comment}</DragInNotice>
        </UploadDragIn>
        <UploadNotice>{props.notice}</UploadNotice>
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
  width: 250px;
  height: 200px;
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