import React, { useState } from 'react'
import styled from 'styled-components'
import icon from '../resources/file-upload-icon.svg'

function Editor (props)
{
  const [comment, setComment] = useState("파일선택")

  const uploadFile = (e) =>
  {
    const file = e.target.files[0]
    const checkResult = checkFileType(file)
    if (file === null)
    {
      alert('파일을 등록해주세요')
      return
    }
    if (!checkResult)   //ttf 파일이 아니라면
    {
      alert('ttf파일을 등록해주세요')
      return
    }
    setComment(file.name)
    openPopup()
  }
  const checkFileType = (file) =>
  {
    const type = file.name.slice(-3)
    return (type === 'ttf' ? true : false) //파일 타입이 ttf라면 true
  }
  const openPopup = () =>
  {
    const features = "width=900, height=800, location=yes, resizable=no, scrollbars=no";
    window.open('/editor/modal', "test", features)
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
                    <label htmlFor="file-input">
                      <UploadIcon src={icon} />
                    </label>
                    <StyledInput id="file-input" type="file" accept=".ttf" onChange={uploadFile} />
                  </div>
                </td>
                <td><Text2>{comment}</Text2></td>
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