import React from 'react';
import styled from 'styled-components';

function AlertModal (props)
{
  return (
    <Container>
      <PopUp>
        <Comment>정말로<br/>그만두시겠습니까?</Comment>
        <ConfirmMenu>
          <Confirm onClick={props.onClickNo}>아니오</Confirm>
          <Confirm onClick={props.onClickYes}>예</Confirm>
        </ConfirmMenu>
      </PopUp>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const PopUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0 0 20px #888;
  padding: 20px;
  z-index: 202;
`;
const Comment = styled.div`
  display:block;
  margin-bottom: 15px;
`;
const ConfirmMenu = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: space-between;
`;
const Confirm = styled.button`
  width: 45%
`;

export default AlertModal;