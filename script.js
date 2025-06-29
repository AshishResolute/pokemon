let createDiv = document.getElementById("content");
let backButton = document.getElementById("back");
let section = document.getElementById("displayIndividualPokemon");
async function fetchPokemon() {
  for (i = 1; i <= 494; i++) {
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
        section.style.background = "rgba(53, 53, 53, 0.7)";
        section.innerHTML = "";
        let divInSection = document.createElement("div");
        divInSection.className = "displayDiv";
        let infoDiv = document.createElement("div");
        infoDiv.className = "infoDiv";// new thing
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
        pokemonImageInSection.src = value.sprites.other['official-artwork'].front_default;
        divInSection.append(pokemonNameInSection);
        divInSection.append(pokemonImageInSection);
        infoDiv.append("Type");
        infoDiv.append(document.createElement("br"));
        for (let i = 0; i < pokemonTypes.length; i++) {
          let typeName = document.createElement("p");
          typeName.style.display = "inline-block";
          let type = pokemonTypes[i].slice(0, 1).toUpperCase() + pokemonTypes[i].slice(1);
          typeName.innerText = type;
          typeName.style.background = getTypeColor(pokemonTypes[i].toLowerCase());
          infoDiv.append(typeName);
          infoDiv.append(" ");
        }
        infoDiv.append(document.createElement("br"));// new Thing
        infoDiv.append("Abilites: ");
        
        pokemonAbility.innerText = value.abilities[0].ability.name;
        console.log(pokemonAbility.innerText);
        infoDiv.append(pokemonAbility.innerText);
        infoDiv.append(document.createElement("br"));
        changeBackground(pokemonTypes[0]);
        infoDiv.append("Moves:");
        infoDiv.append(document.createElement("br"));
        infoDiv.append(movesList);
        divInSection.append(infoDiv);
      });

      backButton.addEventListener("click", () => {
        section.style.visibility = "hidden";
        section.style.backdropFilter = "none";

      });
      let moves = value.moves;
      let moveNames = moves.slice(0,5).map(moveObj => moveObj.move.name);
      let movesList = document.createElement("ul");
moveNames.forEach(move => {
  let li = document.createElement("li");
  li.innerText = move;
  movesList.appendChild(li);
});

    } catch (error) {
      console.error(`Error fetching Pokémon ID ${i}:`, error);
    }

  }
}


fetchPokemon();
let changeBackground = (pokemonTypeForColor) => {
  section.style.backdropFilter = "blur(10px)";  // for blurring
  if (pokemonTypeForColor === "fire") {
    section.style.background = "#FD7D24cc";
  } else if (pokemonTypeForColor === "water") {
    section.style.background = "#b3e5fccc";
  } else if (pokemonTypeForColor === "grass") {
    section.style.background = "#9BCC50cc";
  } else if (pokemonTypeForColor === "electric") {
    section.style.background = "#EED535cc";
  } else if (pokemonTypeForColor === "ice") {
    section.style.background = "#51C4E7cc";
  } else if (pokemonTypeForColor === "fighting") {
    section.style.background = "#D56723cc";
  } else if (pokemonTypeForColor === "poison") {
    section.style.background = "#B97FC9cc";
  } else if (pokemonTypeForColor === "ground") {
    section.style.background = "#F7DE3Fcc";
  } else if (pokemonTypeForColor === "flying") {
    section.style.background = "#3DC7EAcc";
  } else if (pokemonTypeForColor === "psychic") {
    section.style.background = "#F366B9cc";
  } else if (pokemonTypeForColor === "bug") {
    section.style.background = "#bfa76fcc";
  } else if (pokemonTypeForColor === "rock") {
    section.style.background = "#A38C21cc";
  } else if (pokemonTypeForColor === "ghost") {
    section.style.background = "#7B62A3cc";
  } else if (pokemonTypeForColor === "dark") {
    section.style.background = "#707070cc";
  } else if (pokemonTypeForColor === "dragon") {
    section.style.background = "#53A4CFcc";
  } else if (pokemonTypeForColor === "steel") {
    section.style.background = "#9EB7B8cc";
  } else if (pokemonTypeForColor === "fairy") {
    section.style.background = "#FDB9E9cc";
  } else if (pokemonTypeForColor === "normal") {
    section.style.background = "#A4ACAFcc";
  } else {
    section.style.background = "rgba(53, 53, 53, 0.7)";
  }
}
function getTypeColor(type) {
  if (type === "fire") return "#FD7D24cc";
  if (type === "water") return "#b3e5fccc";
  if (type === "grass") return "#9BCC50cc";
  if (type === "electric") return "#EED535cc";
  if (type === "ice") return "#51C4E7cc";
  if (type === "fighting") return "#D56723cc";
  if (type === "poison") return "#B97FC9cc";
  if (type === "ground") return "#F7DE3Fcc";
  if (type === "flying") return "#b3e5fccc";
  if (type === "psychic") return "#F366B9cc";
  if (type === "bug") return "#bfa76fcc";
  if (type === "rock") return "#A38C21cc";
  if (type === "ghost") return "#7B62A3cc";
  if (type === "dark") return "#707070cc";
  if (type === "dragon") return "#53A4CFcc";
  if (type === "steel") return "#9EB7B8cc";
  if (type === "fairy") return "#FDB9E9cc";
  if (type === "normal") return "#A4ACAFcc";
  return "#ccc";
}

