import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import fontSizeIcon from '../resources/format-size.svg'

// import center from '../resources/align-center.png'
// import left from '../resources/align-left.png'
// import right from '../resources/align-right.png'
import justify from '../resources/align-justify.png'
// import EditableDiv from '../components/ContentEditable'
import ContentEditable from 'react-contenteditable'

import '../index.css';

function EditorModal ()
{
  const fsTypeClass =
  {
    1: 'background1',
    2: 'background2',
    3: 'background3'
  }

  // const justifyType =
  // {
  //   1: 'justify',
  //   2: 'center',
  //   3: 'left',
  //   4: 'right'
  // }
  const justifyType =
  {
    1: 'justify-justify',
    2: 'justify-center',
    3: 'justify-left',
    4: 'justify-right'
  }

  const arrow1 = '<'
  const arrow2 = '>'
  const [pageNum, setPageNum] = useState(1)   //현재 보이는 페이지
  // const [pageCount, setPageCount] = useState(1)
  const pageCount = useRef(1)
  const [pageText, setPageText] = useState('')
  const texts = useRef([])

  const [fsType, setFsType] = useState(fsTypeClass[1])
  const [textJustify, setJustify] = useState(justifyType[1])
  // const [justifyIcon, setJustifyIcon] = useState('justify')
  const contenteditable = React.createRef()

  const changeFsType = () =>
  {
    switch (fsType)
    {
      case fsTypeClass[1]: setFsType(fsTypeClass[2]); break;
      case fsTypeClass[2]: setFsType(fsTypeClass[3]); break;
      case fsTypeClass[3]: setFsType(fsTypeClass[1]); break;
    }
  }

  const changeJustifyType = () =>
  {
    switch (textJustify)
    {
      case justifyType[1]:
        setJustify(justifyType[2]); //center
        break;
      case justifyType[2]:
        setJustify(justifyType[3]); //left
        break;
      case justifyType[3]:
        setJustify(justifyType[4]); //right
        break;
      case justifyType[4]:
        setJustify(justifyType[1]); //jusify
        break;
    }
    console.log(textJustify);
    console.log(justifyType[1]);
  }

  const nextPage = () =>
  {
    if (pageCount.current > pageNum)  //다음 페이지가 있는 경우
    {
      texts.current[pageNum - 1] = ''
      texts.current[pageNum - 1] = pageText //현재 페이지 내용 저장
      setPageText(texts.current[pageNum])//다음 페이지 불러오기
      setPageNum(pageNum + 1)
      return
    }
    //다음 페이지가 없는 경우
    alert('다음 페이지가 없습니다')
  }
  const prevPage = () =>
  {
    if (pageNum === 1)
    {
      alert('첫 페이지 입니다')
      return
    }
    texts.current[pageNum - 1] = ''
    texts.current[pageNum - 1] = pageText //현재 페이지 내용 저장
    setPageText(texts.current[pageNum - 2]) //이전 페이지 내용 불러오기
    setPageNum(pageNum - 1)
  }

  const addPage = () =>
  {
    texts.current.forEach(i => console.log(i))
    if (pageCount.current === pageNum)    //현재가 있는 페이지중 마지막일 경우
    {
      texts.current.push(pageText)//현재 페이지 내용 저장
    }
    else
      texts.current[pageNum - 1] = pageText //현재 페이지 내용 업데이트
    pageCount.current += 1
    texts.current.push('')
  }

  function saveText (event)
  {
    setPageText(event.target.value)
  }

  return (
    <Temp>
      <Container>
        <StyledSpan>
          <TextAreaWrapper>
            {/* <div>
              <Paper contenteditable={true} className="paperInput"></Paper>
            </div> */}
            {/* <StyledArea className={fsType} style={{ textAlign: textJustify }} value={pageText} onChange={saveText}></StyledArea> */}
            <ContentEditable
              className={`paper ${fsType} ${textJustify}`}
              // innerRef={this.contentEditable}
              html={pageText} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={saveText} // handle innerHTML change
            // tagName='article' // Use a custom HTML tag (uses a div by default)
            />
            <PrevBtn onClick={prevPage}>{arrow1}</PrevBtn>
            <PageNum>{pageNum}</PageNum>
            <NextBtn onClick={nextPage}>{arrow2}</NextBtn>
          </TextAreaWrapper>
          <ButtonWrapper>
            <FontSizeBtn type="button" onClick={changeFsType}>
              <Img src={fontSizeIcon} />
            </FontSizeBtn>
            <TextJustifyBtn type="button" onClick={changeJustifyType}>
              <Img src={justify} />
            </TextJustifyBtn>
            <AddPageBtn onClick={addPage}>편지지 추가</AddPageBtn>
          </ButtonWrapper>
        </StyledSpan>
      </Container>
    </Temp >
  );
}

const Temp = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Container = styled.div` 
  display: flex;
  flex-direction: column;
  width: 43rem;
  height: 90%;
  background: white;
  border:1px solid black;
  z-index: 201;
`;

// justify-content: center;
// align-items: center;
const StyledSpan = styled.span`
  width:100%;
  height:100%;
`
const TextAreaWrapper = styled.div`
  width: fit-content;
  height: 95%;
  font-size: 30px;
  font-family: testfont;
  outline: 0;
  float: left;
  margin-top:30px;
  margin-left:30px;
`

const StyledArea = styled.textarea`
width: 28rem;
height: 40rem;
font-family: testfont;
background-attachment: local;
padding: 8px 10px;
resize: none;
overflow: hidden;
display: block;
`;

const ButtonWrapper = styled.div`
width: 8rem;
height: 95 %;
float: right;
position: relative;
right: 0;
margin-right: 40px;
margin-top: 30px;
`
const Button = styled.button`
background: white;
border: 0;
display: block;
cursor: pointer;
`

const FontSizeBtn = styled(Button)`
position: relative;
display: inline;
`
const TextJustifyBtn = styled(Button)`
display: inline;
`
const Img = styled.img`
width: 50px;
hiehgt: 50px;
`

const BlueBtn = styled(Button)`
border: 1px solid #57b6ff;
background-color:#57b6ff;
color: white;
`
const PrevBtn = styled(Button)`
font-size: 25px;
width: 40px;
height: 40px;
display: inline;
margin-top: 20px;
`

const NextBtn = styled(PrevBtn)`
  `

const PageNum = styled.span`
margin-left: 20px;
margin-right: 20px;
`

const AddPageBtn = styled(BlueBtn)`
font-size: 16px;
width: 100px;
height: 50px;
box-shadow: 4px 4px 4px 2px #a39a99;
margin-top: 20px;
`

export default EditorModal