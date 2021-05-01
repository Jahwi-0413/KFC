import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header ()
{
  return (
    <Container>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <Title href="/">KFC</Title>
        <SubTitle href="/">Kaligraphy Font Creator</SubTitle>
      </Link>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  height: 300px;
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

export default Header;