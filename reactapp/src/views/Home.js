import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import sentence from "../resources/sentence.png"
import template from "../resources/template.png"

function Home() {
  return (
    <Container>
      <MainComment>
        <MainCommentText>나의 손글씨를</MainCommentText>
        <MainCommentText>글꼴로 만들고 싶으신가요?</MainCommentText>
      </MainComment>

      <GeneratorMenus>
        <Link to='/sentence'>
          <GeneratorButton>
            <img src={sentence} alt="쉽게 만들기로 이동" />
            <GeneratorComment>쉽게 만들기</GeneratorComment>
          </GeneratorButton>
        </Link>
        <Link to='/template'>
          <GeneratorButton>
            <img src={template} alt="디테일하게 만들기로 이동" />
            <GeneratorComment>디테일하게 만들기</GeneratorComment>
          </GeneratorButton>
        </Link>
      </GeneratorMenus>

      <Divider />
      
      <EditorMenu>
        <EditorComment>나만의 폰트로 지인을 위한 편지를 작성해보세요.</EditorComment>
        <Link to='/editor'>
          <EditorButton>편지지 만들기</EditorButton>
        </Link>
      </EditorMenu>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
const MainComment = styled.span`
`;
const MainCommentText = styled.span`
  display: block;
  font-size: 35px;
`;
const GeneratorMenus = styled.div`
  margin: 70px;
`;
const GeneratorButton = styled.button`
  width: 300px;
  border: 0;
  box-shadow: 5px 5px 4px 2px #666;
  background: #F3D1D1;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  margin-left: 50px;
  margin-right: 50px;
`;
const GeneratorComment = styled.p`
  font-size: 20px;
`;
const Divider = styled.hr`
  margin: 20px;
`;
const EditorMenu = styled.div`
  margin: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EditorComment = styled.p`
  display: inline-block;
  width: 500px;
  font-size: 35px;
  margin-right: 200px;
`;
const EditorButton = styled.button`
  width: 300px;
  height: 50px;
  border: 0;
  box-shadow: 5px 5px 4px 2px #666;
  background: #F3D1D1;
  font-size: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export default Home;