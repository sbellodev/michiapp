import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { deleteImage } from "../widgets/Fetch";

function ProfileImages({ profileData }) {
  const userId = parseInt(localStorage.getItem("userId"), 10) || window.location.assign("/michiapp");
  const [numImg, setNumImg] = useState(0);
  const inputEl = useRef(null);
  const closeEl = useRef(null);
  const imgLen = profileData?.length || 0;

  const imageStyle = {
    position: "relative",
    width: "100vw",
    height: "600px",
    maxWidth: "600px",
    maxHeight: "600px",
    objectFit: "cover",
    borderRadius: "0 0 20px 20px",
  };

  const nextNum = (next, e) => {
    e.preventDefault();
    if (e.target !== closeEl.current) {
      if (next) {
        setNumImg(numImg + 1);
      } else {
        setNumImg(0);
      }
    }
  };

  const deleteAndUpdateImage = (id, userIdtoDelete, e) => {
    e.preventDefault();

    const updatedProfileData = profileData.filter(imageData => imageData.id !== id);

    const nextImg = updatedProfileData[numImg + 1]?.id;
    const prevImg = updatedProfileData[numImg - 1]?.id;

    if (nextImg) setNumImg(numImg + 1);
    if (prevImg) setNumImg(numImg - 1);
    deleteImage(parseInt(id, 10), userIdtoDelete);
  };

  useEffect(() => {
    if (numImg === 0) {
      inputEl.current.style.width = `${100 / imgLen - 5}%`;
    } else {
      const widthInt = parseInt(inputEl.current.style.width, 10);
      inputEl.current.style.width = `${
        widthInt >= 90 ? 100 / imgLen - 5 : ((numImg + 1) * 100) / imgLen - 5
      }%`;
    }
  }, [numImg, imgLen]);

  return (
    <StyledSlider>
      <div>
        {profileData && (
          <ImageContainer>
            <ImageNameContainer
              onClick={(e) => nextNum(profileData[numImg + 1], e)}
            >
              <img
                style={imageStyle}
                alt="a pet"
                src={
                  `data:${
                  profileData[numImg].img_type
                  };base64,${
                  profileData[numImg].img_encoded}`
                }
              />
              <Progress>
                <ProgressBar ref={inputEl} />
              </Progress>
              <span>{profileData.animal_name}</span>
              <BtnClose
                src="/michiapp/icon_delete.svg"
                ref={closeEl}
                onClick={(e) => deleteAndUpdateImage(
                      profileData[numImg].id,
                       userId,
                       e
                     )}
              />
            </ImageNameContainer>
          </ImageContainer>
        )}
      </div>
    </StyledSlider>
  );
}

ProfileImages.propTypes = {
  profileData: () => {}
}

ProfileImages.defaultProps = {
  profileData: () => {}
}

const StyledSlider = styled.div`
  width: 100%;
  height: 600px;
  margin: 0 auto;
  border-radius: 0 0 20px 20px;
`;
const Progress = styled.div`
  position: absolute;
  width: 100%;
  height: 12px;
  padding: 12px;
`;
const ProgressBar = styled.div`
  height: 100%;
  margin-left: 12px;
  background-color: #d4def2;
  border-radius: 20px 20px 20px 20px;
  opacity: 0.5;
`;
const ImageNameContainer = styled.div`
    display: grid;
    justify-items: center;
    border-radius: 0px 0px 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 600px;
    margin: 0 auto;
    object-fit: cover;
    animation: resultAnim .8s ease-in-out;

    @keyframes resultAnim {
      0% {
        transform: scale(3) rotate(0deg);
        opacity: 0.2;
      }
      75% {
        transform: scale(1) rotate(-5deg);
        opacity: 1;
      }
      100% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
      }

`;
const ImageContainer = styled.div`
  position: relative;

  span {
    position: absolute;
    justify-self: start;
    bottom: 84px;
    text-shadow: 2px 2px black;
    font-size: 36px;
    padding: 18px;
  }
`;
const BtnClose = styled.img`
  width: 42px;
  max-width: 42px;
  max-height: 42px;
  position: absolute;
  top: 30px;
  right: 12px;
  background: var(--secondary-btn-color);
  color: white;
  padding: 10px;
  border-radius: 20px;
`;
export default ProfileImages;
