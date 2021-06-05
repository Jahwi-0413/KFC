import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import fontSizeIcon from '../resources/format-size.svg'

// import center from '../resources/align-center.png'
// import left from '../resources/align-left.png'
// import right from '../resources/align-right.png'
import justify from '../resources/align-justify.png'
import ContentEditable from 'react-contenteditable'
import download from '../resources/download.png'
import domtoimg from 'dom-to-image'
import FileSaver from 'file-saver'
import '../index.css';

import letter1 from '../resources/letter_1.jpg'
import letter2 from '../resources/letter_2.png'
import letter3 from '../resources/letter_3.png'
import letter4 from '../resources/letter_4.png'


function EditorModal ()
{
  const fsTypeClass =
  {
    1: 'background1',
    2: 'background2',
    3: 'background3'
  }

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
  const pageCount = useRef(1)
  const [pageText, setPageText] = useState('')
  const texts = useRef([])

  const [fsType, setFsType] = useState(fsTypeClass[1])
  const [textJustify, setJustify] = useState(justifyType[1])
  const [letterImg, setLetterImg] = useState()

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

  const changeLetterImg = (imgType) =>
  {
    switch (imgType)
    {
      case 1: setLetterImg(letter1); break;
      case 2: setLetterImg(letter2); break;
      case 3: setLetterImg(letter3); break;
      case 4: setLetterImg(letter4); break;
    }
  }

  const deleteLetterImg = () =>
  {
    setLetterImg()
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

  const downloadPage = () =>
  {
    const node = document.querySelector('.letter-wrapper')
    console.log(node);
    domtoimg.toBlob(node)
      .then(function (blob)
      {
        FileSaver.saveAs(blob, `${pageNum}_letter.png`);
      });
  }

  return (
    <Temp>
      <Container>
        <StyledSpan>
          <TextAreaWrapper>
            <Background className='letter_img letter-wrapper' style={{ backgroundImage: `url(${letterImg})` }}>
              <ContentEditable
                className={`letter ${fsType} ${textJustify} editable letter-size`}
                html={pageText} // innerHTML of the editable div
                disabled={false}       // use true to disable editing
                onChange={saveText} // handle innerHTML change
              />
            </Background>
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
            <StyledDiv>편지지 이미지</StyledDiv>
            <BackgroundImgWrapper>
              <table>
                <Tr>
                  <Th>
                    <Button onClick={() => changeLetterImg(1)}>
                      <Img3 src={letter1}></Img3>
                    </Button>
                  </Th>
                  <Th>
                    <Button onClick={() => changeLetterImg(2)}>
                      <Img3 src={letter2}></Img3>
                    </Button>
                  </Th>
                </Tr>
                <Tr>
                  <Th>
                    <Button onClick={() => changeLetterImg(3)}>
                      <Img3 src={letter3}></Img3>
                    </Button>
                  </Th>
                  <Th>
                    <Button onClick={() => changeLetterImg(4)}>
                      <Img3 src={letter4}></Img3>
                    </Button>
                  </Th>
                </Tr>
                <Tr>
                  <Th colSpan="2"><Button onClick={deleteLetterImg}>배경화면 지우기</Button></Th>
                </Tr>
              </table>
            </BackgroundImgWrapper>
            <AddPageBtn onClick={addPage}>편지지 추가</AddPageBtn>
            <DownloadImgBtn type="button" onClick={downloadPage}>
              <Img2 src={download} />
            </DownloadImgBtn>
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
  width: 29%;
  height: 69%;
  min-width:630px;
  min-height:650px;
  background: white;
  border:1px solid black;
  z-index: 201;
`;

const StyledSpan = styled.span`
  width:100%;
  height:100%;
`
const Background = styled.div`
  z-index:1;
`

const TextAreaWrapper = styled.div`
  font-size: 30px;
  font-family: testfont;
  outline: 0;
  float: left;
  margin-top:5%;
  margin-left:5%;
`

const ButtonWrapper = styled.div`
height: 95 %;
float: right;
position: relative;
right: 0;
margin-right: 5%;
margin-top: 5%;
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
const Img2 = styled.img`
width: 30px;
hiehgt: 30px;
`
const Img3 = styled.img`
width: 42px;
hiehgt: 80px;
`

const StyledDiv = styled.div`
  border:1px solid black;
  width:50%;
  font-size:15px;
  margin-top:20px;
`
const BackgroundImgWrapper = styled.div`

`
const Tr = styled.tr`
  width:120px;
`
const Th = styled.th`
  border:1px solid black;
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
width: 120px;
height: 50px;
box-shadow: 4px 4px 4px 2px #a39a99;
margin-top: 20px;
`

const DownloadImgBtn = styled(AddPageBtn)`
box-shadow: 4px 4px 4px 2px #a39a99;
width: 120px;
height: 50px;
margin-top: 20px;
`

export default EditorModal