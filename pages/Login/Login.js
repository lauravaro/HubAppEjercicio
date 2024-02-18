import { setUser, setUserData } from "../../global/state/globalState";
import { initControler } from "../../utils/route";
import "./Login.css";

const template = () => `
    <div id="containerLogin">
        <h1 id="titleLogin">LOGIN</h1>
        <input type="text" name="username" id="username" />
        <button id="buttonLogin">enviar</button>
    </div>
    `;

const addListeners = () => {
    const buttonLogin = document.getElementById("buttonLogin");
    const username = document.getElementById("username");
    buttonLogin.addEventListener("click", (e) => {
        const valueInput = username.value;

        if (localStorage.getItem(`${valueInput}USER`)) {
            const localUser = localStorage.getItem(`${valueInput}USER`);
            const parseUser = JSON.parse(localUser);

            parseUser.tokem = true;

            const stringUser = JSON.stringify(parseUser);
            localStorage.setItem(`${valueInput}USER`, stringUser);
            sessionStorage.setItem("currentUser", `$(valueInput}USER`);

            setUser(`${valueInput}`);
            setUserData(parseUser);

        } else {

            const customUser = {
                name: username.value,
                fav: [],
                token: true,
            };

            const stringUser = JSON.stringify(customUser);
            console.log("stringUser",customUser, stringUser)
            localStorage.setItem(`${valueInput}USER`, stringUser);
            sessionStorage.setItem("currentUser", `${valueInput}USER`);

            setUser(`${valueInput}USER`);
            setUserData(customUser);

        }

        initControler();
    });
}

export const Login = () => {
    document.querySelector("nav").style.display = "none";
    document.querySelector("main").innerHTML = template();
    addListeners();
};
