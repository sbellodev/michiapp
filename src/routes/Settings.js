import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  saveUserSettings,
  getUserSettingsAPI,
  saveProfileImage,
} from "../widgets/Fetch";
import { EmptyIcon } from "../widgets/Components";
import Cities from "../widgets/cities.json";
import Panel from "../widgets/Panel";
import CityDropDown from "../widgets/CityDropDown";

function Settings() {
  const userId = localStorage.getItem("userId") || window.location.assign("/michiapp");
  const [formData, setFormData] = useState({
    id: userId,
    name: "",
    animalName: "",
    cityId: 0,
  });
  const [uSettings, setUSettings] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const formSettingsResponse = useRef(null);
  const history = useHistory();

  let text = [
    "Elegir archivos",
    "Subir archivos",
    "Imágenes actualizadas",
    "Usuario",
    "Animal",
    "Guardar",
    "Datos actualizados",
  ];
  if (localStorage.getItem("language") !== "es") {
    text = [
      "Choose files",
      "Upload files",
      "Images updated",
      "User",
      "Animal",
      "Save",
      "Data updated",
    ];
  }

  function switchLanguage(e) {
    e.preventDefault();
    if (localStorage.getItem("language") === "es") {
      localStorage.setItem("language", "en");
      window.location.reload();
      return;
    }
    localStorage.setItem("language", "es");
    window.location.reload();
  }

  function signoff() {
    history.push("/michiapp");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      const formImgData = new FormData();
      Object.keys(selectedFile).forEach((a) => {
        formImgData.append("files", selectedFile[a]);
        formImgData.append("id", userId);
      });
      saveProfileImage(formImgData);
    }
    saveUserSettings(formData);
    formSettingsResponse.current.innerHTML = `<div class="msg-success">${text[6]}</div>`;

    setTimeout(() => {
      formSettingsResponse.current.innerHTML = "";
    }, 1000);
  }

  const onSelectFile = (e) => {
    setSelectedFile(e.target.files);
  };

  useEffect(() => {
    getUserSettingsAPI(userId).then((value) => setUSettings(value));
  }, [userId]);

  return (
    <Container>
      {uSettings ? (
        <SettingsContainer>
          <Link to={`/profile/${userId}`}>
            <ImgProfile
              src={`data:${uSettings.imgType};base64,${uSettings.imgEncoded}`}
            />
          </Link>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <UploadLabel>
              {`${text[0]}...`}
              <input
                type="file"
                style={{ display: "none" }}
                name="files"
                accept="image/png, image/jpeg, image/jpg"
                multiple
                onChange={onSelectFile}
              />
            </UploadLabel>
            <br />
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder={`${text[3]}: ${uSettings.name}...`}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <br />
            <input
              type="text"
              id="animalName"
              name="animalName"
              placeholder={`Animal: ${uSettings.animalName}...`}
              onChange={(e) => setFormData({ ...formData, animalName: e.target.value })}
            />
            <br />
            {Cities
              && (
              <CityDropDown
                citiesList={Cities}
                userSettings={uSettings}
                changeFormData={setFormData}
              />
            )}
            <br />
            <span ref={formSettingsResponse} />
            <BtnSubmit type="submit" value={text[5]} />
          </form>
          <br />
          <IconContainer>
            <Icon
              onClick={(e) => switchLanguage(e)}
              src="/michiapp/icon_lang.svg"
              alt="change language"
            />
            <div />
            <Icon
              onClick={(e) => signoff(e)}
              src="/michiapp/icon_signoff.svg"
              alt="signoff"
            />
          </IconContainer>
        </SettingsContainer>
      ) : <EmptyIcon />}
      <Panel />
    </Container>
  );
}

const Container = styled.main`
  @keyframes appear {
    0% {
      opacity: 0;
    }
  }
  animation: 1s ease-out 0s 1 appear;
  display: grid;
  justify-items: center;
  font-size: 18px;
  margin: 0 auto;
  padding: 0;
  max-width: var(--large-width);
`;

const UploadLabel = styled.label`
  border-radius: 20px;
  padding: 18px;
  height: 60px;
  background: white;
  margin-top: 24px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  color: gray;
  font-style: italic;

  input[type="file"] {
    display: none;
  }
`;

const SettingsContainer = styled.div`
  border: 1px solid #5093f8;
  border-radius: 20px;
  box-shadow: 1px 1px 3px #5093f8;
  padding: 18px;

  .msg-success {
    display: grid;
    place-content: center;
    height: 20px;
    background: var(--secondary-btn-color);
    font-style: normal;
    font-weight: bold;
    box-shadow: inset 0 -2px 0 var(--secondary-btn-color);
    color: white;
    border-radius: 20px;
    padding: 18px;
    font-style: italic;
    margin-top: 12px;
  }
`;

const ImgProfile = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: black 1px 2px;
  display: block;
  margin: 0 auto;
`;

const BtnSubmit = styled.input`
  height: 60px;
  background: #ff75a7;
  font-style: normal;
  font-weight: bold;
  background: var(--secondary-bg-color);
  font-weight: bold;
  box-shadow: inset -1px -2px 2px black;
`;

const IconContainer = styled.div`
  float: right;
`;

const Icon = styled.img`
  width: 58px;
`;

export default Settings;
