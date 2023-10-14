import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { setCookie, eraseCookie } from "../widgets/Cookies";

let text = [
  "En Michiapp utilizamos las cookies para prestarle un mejor servicio y proporcionarle una mejor experiencia de navegación. Puede obtener más información pulsando en ",
  "[Más información]",
  "Aceptar",
  "Cancelar",
];
if (localStorage.getItem("language") !== "es") text = [
    "In Michiapp we use cookies to provide you with a better service and better experience of navigation. You can find more information clicking on ",
    "[More information]",
    "Accept",
    "Cancel",
  ];

function Popup() {
  const msg = useRef(null);

  function acceptPolicy() {
    msg.current.style.display = "none";
    setCookie("consent", "accepted", 7);
  }
  function rejectPolicy() {
    msg.current.style.display = "none";
    eraseCookie("consent");
  }

  useEffect(() => {}, []);

  return (
    <Container ref={msg}>
      <p>
        {text[0]}
        <a href="/cookies">{text[1]}</a>
        .
      </p>
      <div>
        <button type="button" onClick={(e) => acceptPolicy(e)}>{text[2]}</button>
        <button type="button" onClick={(e) => rejectPolicy(e)}>{text[3]}</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  background: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  bottom: 0px;
  font-weight: bold;
  left: 0px;

  p {
    padding: 0 12px;
  }
  button {
    color: white;
    padding: 12px 12px;
    margin: 12px 12px;
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    background: var(--secondary-bg-color);
    box-shadow: inset -1px -2px 2px black;
  }
  a {
    color: var(--colorFooter);
    text-decoration: underline;
  }
`;
export default Popup;
