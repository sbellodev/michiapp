import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Panel from "../widgets/Panel";
import { ProfileImages } from "./ProfileImages";
import { getUserFiles } from "../widgets/Fetch.js";
import { EmptyIcon } from "../widgets/Components.js";
import { useParams } from "react-router-dom";

const Home = () => {
  const [getUSettings, setUSettings] = useState("");
  let { user_id } = useParams() || window.location.assign("/michiapp");

  useEffect(() => {
    getUserFiles(user_id).then((value) => setUSettings(value));
  }, []);

  return (
    <Container>
      {(getUSettings && <ProfileImages profileData={getUSettings} />) || (
        <EmptyIcon />
      )}
      <Panel />
    </Container>
  );
};

const Container = styled.main`
  @keyframes appear {
    0% {
      opacity: 0;
    }
  }
  animation: 1s ease-out 0s 1 appear;
  display: grid;
  justify-items: center;
  margin: 0 auto;
  padding: 0;
  max-width: var(--large-width);
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export default Home;
