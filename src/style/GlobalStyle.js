import { createGlobalStyle } from 'styled-components'
import { mainColorButton, mainContrastColor } from '../constants/colors'
import 'bootstrap/dist/css/bootstrap.min.css'

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
    }
    button {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: ${mainColorButton};
        font-size: 20px;
        font-weight: 600;
        color: ${mainContrastColor};
        cursor: pointer;
        width: 100%;
        padding: 12px;
    }
    h1 {
        font-weight: 700;
        font-size: 26px;
        color: ${mainContrastColor};
    }
    input {
        font-size: 20px;
        width: calc(100% - 30px);
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }
    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: ${mainContrastColor};
        text-decoration: none;
        padding-top: 30px;
    }
`

export default GlobalStyle
