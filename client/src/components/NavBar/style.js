import { css } from "@emotion/react";

export const navItemStyle = css(`
display: flex;
flex-direction: column;
width: 110px;
height: 110px;
border-radius: 50%;
align-items: center;
justify-content: center;
color: black;
background-color: #dbd8ed;
gap: 5px;
font-size: 1rem;

&:hover {
  color: white;
  background: #0c0633;
  cursor: pointer;
}
`);
