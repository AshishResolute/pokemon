let createDiv = document.getElementById("content");
 async function fetchPokemon() {
    for (i = 1; i <= 151; i++) {
        try{
           let fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            let value = await fetchData.json();   
                let createdDiv = document.createElement("div");
                let createImg = document.createElement("img");
                let pokemonName = document.createElement("p");
                  pokemonName.innerHTML = value.name;
                createImg.src = value.sprites.front_default;
                  createdDiv.append(createImg);
                  createdDiv.append(pokemonName);
                createDiv.append(createdDiv);
               
              
                console.log(value.name);
    }catch (error) {
            console.error(`Error fetching Pokémon ID ${i}:`, error);
        }
           
    }
}
fetchPokemon();
