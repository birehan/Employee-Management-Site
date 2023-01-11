import { css } from "@emotion/react";

export const cardStyle = css(`
    position: relative;
    height: 350px;
    width: 270px;
    background-color: #e1e3eb;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    &:hover {
      background: white;
      cursor: pointer;
      border: 1px solid silver;
      transition: 300ms all ease-in;
    }
`);

export const editButtonStyle = css(`
width: 100%;
height: 30px;

color: green;
border: 1px solid green;
margin-bottom: 5px !important;
border-radius: 3px;
&:hover {
  background: green;
  color: white;
}
`);

export const deleteButtonStyle = css(`
width: 100%;
height: 30px;

color: red;
border: 1px solid red;
border-radius: 3px;
&:hover {
  background: red;
  color: white;
}
`);

export const emailStyle = css(`

width: fit-content;
margin: auto !important;
padding: 5px 15px;
variant: span;
background: #dbd8ed;
border-radius: 20px;`);
