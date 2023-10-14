import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

function ProfileChat({ chatName, chatImg, chatImgType, chatOtherId }) {
  return (
    <ProfileContainer>
      <Link to={`/profile/${chatOtherId}`}>
        <ImgProfile src={`data:${chatImgType};base64,${chatImg}`} />
      </Link>
      <span>{chatName}</span>
    </ProfileContainer>
  );
}

ProfileChat.propTypes = {
  chatName: () => {},
  chatImg: () => {},
  chatImgType: () => {},
  chatOtherId: () => {}
};

ProfileChat.defaultProps = {
  chatName: () => {},
  chatImg: () => {},
  chatImgType: () => {},
  chatOtherId: () => {}
};

const ImgProfile = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: black 1px 2px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 0;
  font-weight: bold;

  span {
    padding-left: 18px;
  }
`;

export default ProfileChat;
