import { createGlobalStyle } from "styled-components";
import Variables from "./Variables.js";

if (typeof window !== "undefined") {
  const WebFont = require("webfontloader");
  WebFont.load({
    google: {
      families: [
        "Roboto Condensed:400,700",
        "Roboto Condensed Light:400,700",
        "Roboto:400,700"
      ]
    }
  });
}

const GlobalStyle = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li{
  list-style-type:none;
}

h2{
font-size: 32px;
@media (min-width: 475px) {
    font-size: 65px;
  }
}

 &.wf-robotocondensed-n4-active.wf-robotocondensed-n7-active {
      h1,h2,h3,h4,h5,h6,button {
        font-family: Roboto Condensed, Arial, sans-serif;
      }

    }
    &.wf-roboto-n4-active.wf-roboto-n7-active {
      body {
        font-family: Roboto, Arial, sans-serif;
      }
      span {
        font-family: Roboto Condensed Light, Arial, sans-serif ;
      }
    }

    button{
        border:0;
    }
`;

export default GlobalStyle;
