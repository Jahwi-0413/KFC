import React, { useState } from 'react'
import styled from 'styled-components'
import icon from '../resources/file-upload-icon.svg'
import WindowOpener from 'react-window-opener'

function Editor (props)
{
  const [comment, setComment] = useState("파일선택")

  const uploadFile = (e) =>
  {
    const file = e.target.files[0]
    console.log(file);
    console.log(file.type);
    if (file !== null)
      setComment(file.name)
  }

  return (
    <Container>
      <Text>
        나만의 손글씨로<br />
            편리하게 편지를 작성해보세요<br /><br />
            밑의 버튼을 눌러 폰트 파일을 등록하고<br />
            편집기를 사용해 보세요<br />
      </Text>
      <StyledDiv>
        <StyledForm>
          <table>
            <tbody>
              <tr>
                <td>
                  <div>
                    <label>
                      <UploadIcon src={icon} />
                    </label>
                    <StyledInput type="file" accept=".ttf" onChange={uploadFile} />
                  </div>
                </td>
                <td><Text2>{comment}</Text2></td>
                <td>
                  <SubmitBtn type="submit">
                    <WindowOpener url="/editor/modal" width={1000} height={900}>등록</WindowOpener>
                  </SubmitBtn>
                </td>
              </tr>
            </tbody>
          </table>
        </StyledForm>
      </StyledDiv>
    </Container >
  )
}

const Container = styled.div`
    margin-top: 60px;
    display:table;
    margin-left:auto;
    margin-right:auto;
`;
const Text = styled.div`
  font-size: 25px;
  display:block;
  display:table-row;
`;

const StyledDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:30px;
`
const StyledForm = styled.form`
`;
const UploadIcon = styled.img`
  width: 50px;
  height: 40px;
`;
const StyledInput = styled.input`
  display:none;
`;
const Text2 = styled.div`
  font-size: 24px;
  margin-left:-10px;
`;

const SubmitBtn = styled.button`
`;

const WidFitContent = styled.div`
  width:fit-content;
`
export default Editor;