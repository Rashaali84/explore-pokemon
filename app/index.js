//get access to

import { pokeModule } from './pokemon.js';
const form = document.querySelector("form");
const output = document.querySelector("output");

form.addEventListener("submit", event => {
    // stop the form submitting and reloading the page
    event.preventDefault();

    // clear out any previous results
    output.innerHTML = "";

    // get the value of the field with name="pokemon"
    const formData = new FormData(event.target);
    const id = formData.get("pokemon");
    pokeModule.getPokemon(id).then(fetchedPoke => pokeModule.displayPokemon(fetchedPoke));


});
