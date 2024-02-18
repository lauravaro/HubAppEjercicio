import "./Spinner.css";

const template = () => `
<div class="lds-Spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
`;

export const PrintTemplateSpinner = () =>
    (document.getElementById("Spinner").innerHTML = template());
