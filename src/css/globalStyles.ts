import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Lato", sans-serif;
  font-size: 1em;
  line-height: 1.4;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font};
  margin: 0;
  padding: 0;
}

a {
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.font};
}

input,
textarea {
  font-family: "Lato", sans-serif;
  background-color: transparent;
}

button, input[type="submit"], input[type="reset"], input {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

`;

export default GlobalStyle;
