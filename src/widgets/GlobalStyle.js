import { createGlobalStyle } from "styled-components";
import fontRoboto from "../routes/font/Roboto-regular.woff2";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    src: url(${fontRoboto}) format('woff2');
    font-display: swap;
  }
  /*--main-bg-color: linear-gradient(#5093F8, #6FBCF6);*/
  :root {
    --main-bg-color: linear-gradient(#699FF1, #6FBCF6);
    --secondary-bg-color: #312FC3FC;
    --main-btn-color: #ff81c7fc;
    --secondary-btn-color: #FABC6D;
    --large-width: 600px;
  }
  html, body {
    height: 100%;
    font-family Roboto, Arial;

  }
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video, input {
      margin:0;
      padding:0;
      border:0;
      outline:0;
      font-size:100%;
      vertical-align:baseline;
      background:transparent;
  }
  body {
      line-height: 1;
  }
  article,aside,details,figcaption,figure,
  footer,header,hgroup,menu,nav,section {
      display:block;
  }
  nav ul, ul, li {
      list-style:none;
  }
  input[type="submit"], button {
    color: white;
    font-weight: bold;
    border-radius: 20px;
  }
  a {
      margin:0;
      padding:0;
      font-size:100%;
      vertical-align:baseline;
      background:transparent;
      text-decoration: none;
      color: inherit;
  }
  a:hover {
    font-weight: bold;
    -moz-transform: translate(-2px, -2px);
    -ms-transform: translate(-2px, -2px);
    -o-transform: translate(-2px, -2px);
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }
  h3, h4, h5 {
    margin-bottom: 12px;
  }
  h3 {
    font-size: 24px;
  }
  h2 {
    font-size: 32px;
  }
  button {
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
  }
  input, select {
    background: white;
    border-radius: 20px;
    padding: 18px;
    font-style: italic;
    margin-top: 12px;
  }
`;

export default GlobalStyles;
