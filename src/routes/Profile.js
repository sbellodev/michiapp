import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Panel from "../widgets/Panel";
import ProfileImages from "./ProfileImages";
import { getUserFiles } from "../widgets/Fetch";
import { EmptyIcon } from "../widgets/Components";

function Profile() {
  const [getUSettings, setUSettings] = useState("");
  const { userId } = useParams() || window.location.assign("/michiapp");
  
  useEffect(() => {
    getUserFiles(userId).then((value) => setUSettings(value));
  }, []);

  return (
    <Container>
      {(getUSettings && <ProfileImages profileData={getUSettings} />) || (
        <EmptyIcon />
      )}
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
  margin: 0 auto;
  padding: 0;
  max-width: var(--large-width);
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export default Profile;
