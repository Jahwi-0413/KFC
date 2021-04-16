import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Header = () =>
{
    return (
        <>
            <Rectangle>
                <StyledLink to="/">
                    <Kfc>KFC</Kfc>
                    <Kalligraphy>Kalligraphy Font Creator</Kalligraphy>
                </StyledLink>
            </Rectangle>
        </>
    )
}

const Rectangle = styled.div`
    width:100%;
    background-color:#f54343;
    padding-top:40px;
    padding-bottom:50px;
`
const Kfc = styled.div`
    font-family:Kameron;
    font-size:70px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    text-align:center;
`

const Kalligraphy = styled.div`
    font-family: Kameron;
    font-size: 35px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    text-align:center;
    margin-top:-10px;
`

const StyledLink = styled(Link)`
    text-decoration:none;
`
export default Header;