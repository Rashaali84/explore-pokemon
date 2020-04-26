class pokemon {

    //method to get 
    static async getPokemon(idPoke) {
        // request that pokemon from PokeAPI
        try {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}`);
            if (!response.ok) throw new Error(response.status);
            else {
                let fetchedPoke = await response.json();
                return fetchedPoke;

            }
        }
        catch (error) {
            if (error.message === "404") {
                output.textContent = `⚠️ Couldn't find "${name}"`;
            } else {
                output.textContent = "⚠️ Something went wrong";
            }

        }


    }
    //method to display 
    static displayPokemon(fetchedPoke) {
        //get access to
        const output = document.querySelector("output");
        const heading = document.createElement("h2");
        heading.textContent = fetchedPoke.name;
        const image = document.createElement("img");
        image.src = fetchedPoke.sprites.front_default;
        image.alt = fetchedPoke.name;
        output.appendChild(heading);
        output.appendChild(image);

    }
}
export { pokemon as pokeModule } 