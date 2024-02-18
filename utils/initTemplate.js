import {PrintTemplateHeader, PrintTemplateFooter} from "../components"

export const initTemplate = () => {
    const app = document.getElementById("app"); 

    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");

    app.append(header, main, footer);

    PrintTemplateHeader();
    PrintTemplateFooter();
}