import { css } from "@emotion/react";

export const homepageStyle = css(`
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: 100px auto;
    gap: 20px;
    max-height: 100vh;
`);

export const addEmployeeButtonStyle = css(`
    display: flex;
    justify-content: end;
    align-items: end;
    background: #131e61;
    color: white;
    font-size: 20px !important;
    padding: 10 20px;
    border-radius: 50px !important;
    &:hover {
    cursor: pointer;
`);
