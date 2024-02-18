import { getUser } from "../../global/state/globalState";
import { changeColorRGB } from "../../utils";
import { initControler } from "../../utils/route";
import "./Header.css";

const template = () => `
    <img
        src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679162/header_giqdug.jpg"
        alt="title hub game website (app)"
        class="logo"
    />
    <nav>
        <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682684561/changeColor_tat29q.png"
            alt=" change to style mode page"
            id="changeColor"
        />
        <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682685633/home_nekvs0.png"
            alt=" navigate to home app"
            id="buttonDashboard"
        />
        <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679055/logout_arz0gw.png"
            alt="logout"
            id="buttonLogout"
        />
    </nav>
`;


const addListeners = () => {

    const changeColor = document.getElementById("changeColor");
    changeColor.addEventListener("click", (e) => {
            const color = changeColorRGB();
            document.body.style.background = color;
    });

    const buttonDashboard = document.getElementById("buttonDashboard");
    buttonDashboard.addEventListener("click", (e) => {
        initControler("Dashboard");
    });


    const buttonLogout = document.getElementById("buttonLogout");
    buttonLogout.addEventListener("click", (e) => {

        const userState = getUser().name;
        const currentUser = localStorage.getItem(userState);
        const parseCurrentUser = JSON.parse(currentUser);
        const updateUser = { ...parseCurrentUser, token: false };
        const stringUpdateUser = JSON.stringify(updateUser);
        localStorage.removeItem(userState);
        sessionStorage.removeItem("currentUser");
        localStorage.setItem(userState, stringUpdateUser);


        initControler("Login");
    });
    };

    export const PrintTemplateHeader = () => {
        document.querySelector("header").innerHTML = template();
        addListeners();
    };