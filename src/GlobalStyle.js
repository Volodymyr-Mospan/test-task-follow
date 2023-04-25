import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f6effd;
}

code {
  color: #91859e9a;
  font-family: 'Montserrat', sans-serif;
}

 img {
  display: block;
  width: 100%;
}

p {
  margin: 0;
}

button {
  min-width: 196px;
  min-height: 50px;


  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  background: #ebd8ff;

  cursor: pointer;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover,
button:active {
  background: #d4c2e6;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}
`;
