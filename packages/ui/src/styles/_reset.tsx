
import { css } from 'styled-components';

export const CssReset = css`
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none;
}

button,
input,
select {
  margin: 0;
  padding: 0;
}

button {
  border: none;
  text-decoration: none;
  background: none;
  appearance: none;
  font-family: inherit;
  font-style: inherit;
  font-variant-ligatures: inherit;
  font-variant-caps: inherit;
  font-variant-numeric: inherit;
  font-variant-east-asian: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  text-rendering: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;
  line-height: inherit;
  text-transform: none;
  text-indent: inherit;
  text-shadow: none;
  text-align: inherit;
}

html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

img,
video {
  height: auto;
  max-width: 100%;
}

iframe {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

//

html,
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 20px;
}
`;
