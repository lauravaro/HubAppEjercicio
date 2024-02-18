import {
        PrintTemplateSpinner,
        CardsPokemons,
        PrintButton,
        PrintSpinner,

} from "../../components";
import { getData } from "../../global/state/globalState";
import { Paginacion, filterPokemon } from "../../utils";
import "./Pokemon.css";

const template = () => `
    <div id="pokemon">
            <div id="containerFilter">
                <div id="SpinnerButtonFilter"></div>
                <div id="filterButton"></div>
                <input
                    type="text"
                    id="inputPokemon"
                    placeholder="Busca tu pokemon favorito"
                />
            </div>
            <div id="paginacion">/div>
            <div id="Spinner"></div>
            <div id="galleryPokemon"></div>
    </div>
`;

const dataService = async () => {
        const getDataPokemon = getData("Pokemon");
        const {pokemonData, type } = getDataPokemon;
        document.getElementById("Spinner").innerHTML = "";
        PrintButton(type);
        document.getElementById("SpinnerButtonFilter").innerHTML = "";

        addListeners();
        Paginacion(pokemonData, 25);

};

const addListeners = () => {
    const inputPokemon = document.getElementById("inputPokemon");
    inputPokemon.addEventListener("input", (e) => {
        filterPokemon(e.target.value, "name");
    });

}

export const PrintPokemonPage = () => {
        document.querySelector("main").innerHTML = template();

        PrintTemplateSpinner();
        PrintSpinner();
        dataService();
}

