let createDiv = document.getElementById("content");
let backButton = document.getElementById("back");
let section = document.getElementById("displayIndividualPokemon");
async function fetchPokemon() {
  for (i = 1; i <= 251; i++) {
    try {
      let fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      let value = await fetchData.json();
      let createdDiv = document.createElement("div");
      let createImg = document.createElement("img");
      let pokemonName = document.createElement("p");
      let header = document.createElement("h6");
      header.innerHTML = i;
      pokemonName.innerHTML = value.name;
      createImg.src = value.sprites.front_default;
      createdDiv.append(header);
      createdDiv.append(createImg);
      createdDiv.append(pokemonName);
      createDiv.append(createdDiv);
      createdDiv.addEventListener("click", () => {
        section.style.visibility = "visible";
        section.innerHTML = "";
        let divInSection = document.createElement("div");
        divInSection.className = "displayDiv";
        let infoDiv = document.createElement("div");
        infoDiv.className = "infoDiv";
        section.append(backButton);
        section.append(divInSection);
        let pokemonImageInSection = document.createElement("img");
        let pokemonNameInSection = document.createElement("p");
        
        let pokemonAbility = document.createElement("p");
        let pokemonTypes = [];
        for (let i = 0; i < value.types.length; i++) {
          pokemonTypes.push(value.types[i].type.name);
        }
        let pokemonNameEdit = value.name;
        pokemonNameEdit = pokemonNameEdit[0].toUpperCase() + pokemonNameEdit.slice(1);
        pokemonNameInSection.innerText = pokemonNameEdit;
        pokemonImageInSection.src = value.sprites.other['official-artwork'].front_default
        divInSection.append(pokemonNameInSection);
        divInSection.append(pokemonImageInSection);
        console.log(pokemonTypes);
        for(let i=0;i<pokemonTypes.length;i++)
        {
          let typeName = document.createElement("p");
          typeName.style.display="inline-block";
          let type = pokemonTypes[i].slice(0,1).toUpperCase()+pokemonTypes[i].slice(1);
          typeName.innerText=type;
          infoDiv.append(typeName);
          infoDiv.append(" ");
        }
      
        // infoDiv.append("Abilities"+pokemonAbility.innerText);
        divInSection.append(infoDiv);
        pokemonAbility.innerHTML = value.abilities.ability;
       
        
      });
      // console.log(value.name);
      backButton.addEventListener("click", () => {
        section.style.visibility = "hidden";

      })
    } catch (error) {
      console.error(`Error fetching Pokémon ID ${i}:`, error);
    }

  }
}

fetchPokemon();
