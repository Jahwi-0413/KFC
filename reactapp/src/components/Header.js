import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.header`
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
  background-color: #E74C3C;
  margin-bottom: 50px;
`;
const Title = styled.a`
  display: block;
  color: #FFF;
  font-size: 50px;
  font-family: serif;
  text-decoration: none;
`;
const SubTitle = styled.a`
  display: block;
  color: #FFF;
  font-size: 20px;
  font-family: serif;
  text-decoration: none;
`;

function Header() {
  return (
    <Container>
      <div>
        <Title href="/">KFC</Title>
        <SubTitle href="/">Kaligraphy Font Creator</SubTitle>
      </div>
    </Container>
  )
}

export default Header;