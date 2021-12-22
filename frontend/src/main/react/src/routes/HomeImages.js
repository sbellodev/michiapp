import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { saveLike } from "../widgets/Fetch.js";

const Slider = ({ slides }) => {
  const [currentAnimal, setCurrentAnimal] = useState(0);
  const [currentImg, setCurrentImg] = useState(0);
  const userId =
    localStorage.getItem("userId") || window.location.assign("/michiapp");
  const length = slides.length;
  const progressBarEl = useRef(null);
  const btnsEl = useRef(null);

  const imageStyle = {
    position: "relative",
    width: "100vw",
    height: "600px",
    maxWidth: "600px",
    maxHeight: "600px",
    objectFit: "cover",
    borderRadius: "0 0 20px 20px",
  };

  const likeSlide = (event, user_r_id, imgLen) => {
    event.preventDefault();
    progressBarEl.current.style.width = "0%";
    saveLike(userId, user_r_id);
    setCurrentImg(0);
    setCurrentAnimal(currentAnimal === length - 1 ? 0 : currentAnimal + 1);
  };

  const dislikeSlide = (event, imgLen) => {
    event.preventDefault();
    progressBarEl.current.style.width = 0;
    setCurrentImg(0);
    setCurrentAnimal(currentAnimal === length - 1 ? 0 : currentAnimal + 1);
  };

  const nextNum = (e, next) => {
    e.preventDefault();
    if (e.target !== btnsEl.current)
      next ? setCurrentImg(currentImg + 1) : setCurrentImg(0);
  };

  useEffect(() => {
    let imgLen = slides[currentAnimal].animalImg.length;
    if (currentImg === 0) {
      progressBarEl.current.style.width = 100 / imgLen - 5 + "%";
    } else {
      let widthInt = parseInt(progressBarEl.current.style.width, 10);
      progressBarEl.current.style.width =
        widthInt >= 90
          ? 100 / imgLen - 5 + "%"
          : ((currentImg + 1) * 100) / imgLen - 5 + "%";
    }
  }, [currentImg, currentAnimal, slides]);

  return (
    <StyledSlider>
      {slides.map((slide, index) => {
        slide.animalImg = slide.imgArray.split(",").reverse();
        slide.animalType = slide.imgType.split(",").reverse();
        return (
          <ImageContainer key={index}>
            {index === currentAnimal && (
              <div>
                <ImageNameContainer
                  onClick={(e) => nextNum(e, slide.animalImg[currentImg + 1])}
                >
                  <img
                    style={imageStyle}
                    alt="A pet"
                    src={
                      "data:" +
                      slide.animalType[currentImg] +
                      ";base64," +
                      slide.animalImg[currentImg]
                    }
                  />
                  <Progress>
                    <ProgressBar ref={progressBarEl}></ProgressBar>
                  </Progress>
                  <span>
                    {slide.animalName +
                      ", " +
                      Math.round(slide.distance) +
                      " kms"}
                  </span>
                </ImageNameContainer>
                <BtnContainer ref={btnsEl}>
                  <BtnDislike
                    onClick={(e) => dislikeSlide(e, slide.animalImg.length)}
                  >
                    <img src={"/michiapp/dislike.svg"} alt={"like button"} />
                  </BtnDislike>
                  <BtnLike
                    onClick={(e) =>
                      likeSlide(e, slide.id, slide.animalImg.length)
                    }
                  >
                    <img src={"/michiapp/like.svg"} alt={"like button"} />
                  </BtnLike>
                </BtnContainer>
              </div>
            )}
          </ImageContainer>
        );
      })}
    </StyledSlider>
  );
};
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
  padding-top: 12px;
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
      img {
        position: relative;
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
const BtnContainer = styled.div`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: 50fr 50fr;
  justify-items: center;
  align-self: flex-end;
  align-items: flex-end;
  bottom: 12px;
  margin: 0 auto;
`;
const BtnLike = styled.button`
  max-width: 84px;
  max-height: 84px;
  background: var(--main-btn-color);
  box-shadow: inset -1px -2px 2px #9b0358fc;
  padding: 12px;
  margin: 12px;
  color: black;

  img {
    display: block;
    margin: 0 auto;
    width: 42px;
  }
`;
const BtnDislike = styled.button`
  max-width: 84px;
  max-height: 84px;
  background: var(--secondary-btn-color);
  box-shadow: inset -1px -2px 2px #af6302;
  padding: 12px;
  margin: 12px;
  color: black;

  img {
    display: block;
    margin: 0 auto;
    width: 42px;
  }
`;
export { Slider };
