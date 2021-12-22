import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {
  testGetUser,
  testGetAnimal,
  testGetMatch,
  testGetUserSettings,
} from "../widgets/Tests";
import {
  getUserAPI,
  getAnimalAPI,
  getMatchAPI,
  getUserSettingsAPI,
} from "../widgets/Fetch";

const APITest = () => {
  const [getUserResponse, setUserResponse] = useState("");
  const [getAnimalResponse, setAnimalResponse] = useState("");
  const [getMatchResponse, setMatchResponse] = useState("");
  const [getUserSettingsResponse, setUserSettingsResponse] = useState("");

  useEffect(() => {
    getUserAPI(10).then((value) => setUserResponse(value));
    getAnimalAPI(10).then((value) => setAnimalResponse(value));
    getMatchAPI(10).then((value) => setMatchResponse(value));
    getUserSettingsAPI(10).then((value) => setUserSettingsResponse(value));
  }, []);

  return (
    <Container>
      <h4>Testing API</h4>
      <h4>8 Tests</h4> <br />
      <p>
        {(getUserResponse && testGetUser(getUserResponse, 1)) ||
          "Ningún dato extraído ⚠️"}{" "}
        User Response
      </p>
      <p>
        {(getUserResponse && testGetUser(getUserResponse, 5)) ||
          "Ningún dato extraído ⚠️"}{" "}
        User Data
      </p>
      <br />
      <p>
        {(getMatchResponse && testGetMatch(getMatchResponse, 3)) ||
          "Ningún dato extraído ⚠️"}{" "}
        Matches Response
      </p>
      <p>
        {(getMatchResponse && testGetMatch(getMatchResponse, 7)) ||
          "Ningún dato extraído ⚠️"}{" "}
        Matches Data
      </p>
      <br />
      <p>
        {(getUserSettingsResponse &&
          testGetUserSettings(getUserSettingsResponse, 4)) ||
          "Ningún dato extraído ⚠️"}{" "}
        User Settings Response
      </p>
      <p>
        {(getUserSettingsResponse &&
          testGetUserSettings(getUserSettingsResponse, 8)) ||
          "Ningún dato extraído ⚠️"}{" "}
        User Settings Data
      </p>
      <br />
      <p>
        {(getAnimalResponse && testGetAnimal(getAnimalResponse, 2)) ||
          "Ningún dato extraído ⚠️"}{" "}
        Animal Response
      </p>
      <p>
        {(getAnimalResponse && testGetAnimal(getAnimalResponse, 6)) ||
          "Ningún dato extraído ⚠️"}{" "}
        Animal Data
      </p>
      <br />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
  font-size: 36px;
  font-weight: bold;
  text-align: left;
`;

export default APITest;
