let contenedor= document.getElementById("container");

function infoPokemon(pokemonId){
    for(let x=1;x<=pokemonId;x++){
        idPokemon(x);
    }
}


let pokemonDiv = document.getElementById("pokemon");
async function idPokemon(idPokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    .then(function(respuesta){
        return respuesta.json()
    })
   // .then((data)=> console.log(data))

    .then((pokemon)=>{
       
        let idPokemon= document.createElement("label")
        let imagen = document.createElement("img")
        let nombre = document.createElement("p")

        idPokemon.innerText= pokemon.id;
        imagen.src = pokemon.sprites.front_default;
        nombre.innerText= pokemon.name;


        pokemonDiv.appendChild(imagen)
        pokemonDiv.appendChild(idPokemon)
        pokemonDiv.appendChild(nombre)
        
    })
    .catch((error)=>{
        console.log(error);
    })
}

infoPokemon(2);