import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Tests from "../widgets/Tests"; // Import the Tests component

import {
  getMatchAPI,
  getUserSettingsAPI,
} from "../widgets/Fetch";

function APITest() {
  const [getMatchResponse, setMatchResponse] = useState("");
  const [getUserSettingsResponse, setUserSettingsResponse] = useState("");
  const userId = 6;
  useEffect(() => {
    getMatchAPI(userId).then((value) => setMatchResponse(value));
    getUserSettingsAPI(userId).then((value) => setUserSettingsResponse(value));
  }, []);

  return (
    <Container>
      <h4>Testing API</h4>
      <h4>8 Tests</h4>
      {' '}
      <br />
      <p>
        {(getMatchResponse && Tests.testGetMatch(getMatchResponse, 3)) // Use it from Tests
          || "Ningún dato extraído ⚠️"}
        {" "}
        Matches Response
      </p>
      <p>
        {(getMatchResponse && Tests.testGetMatch(getMatchResponse, 7)) // Use it from Tests
          || "Ningún dato extraído ⚠️"}
        {" "}
        Matches Data
      </p>
      <br />
      <p>
        {(getUserSettingsResponse
          && Tests.testGetUserSettings(getUserSettingsResponse, 4)) // Use it from Tests
          || "Ningún dato extraído ⚠️"}
        {" "}
        User Settings Response
      </p>
      <p>
        {(getUserSettingsResponse
          && Tests.testGetUserSettings(getUserSettingsResponse, 8)) // Use it from Tests
          || "Ningún dato extraído ⚠️"}
        {" "}
        User Settings Data
      </p>
      <br />
      <br />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
  font-size: 36px;
  font-weight: bold;
  text-align: left;
`;

export default APITest;
