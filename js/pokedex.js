const pokemonNombre = document.getElementById("pokemon")

const inputBuscador= document.getElementById("heroBuscador")
const btnBuscador = document.getElementById("heroBtn")


function id(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(respuesta){
        return respuesta.json()
    })

    .then((pokemon)=>{
        console.log(pokemon);
        creacionCard(pokemon)
        
    })
    .catch((error)=>{
        console.log(error);
    })
}

function infoPokemon(pokemon){
    for(let x=1;x<=pokemon;x++){
        id(x)
    }
}

infoPokemon(100)

btnBuscador.onclick = ()=>{
    let nombrePokemon = inputBuscador.value
    id(nombrePokemon)

}


function creacionCard(pokemon){

     let contenedorNombre= document.createElement("div")
    
     const {types} = pokemon 

    const color = pokeColores[types[0].type.name]
    contenedorNombre.style.background = `${color}`


      let idPokemon= document.createElement("label")
      let imagen = document.createElement("img")
      let nombre = document.createElement("p")
     
      contenedorNombre.classList.add("contenedorNombre")
      idPokemon.classList.add("idPokemon")
      imagen.classList.add("imagenPokemon")
      nombre.classList.add("nombrePokemon")

      idPokemon.innerText = idCompleto(pokemon.id)
     
      imagen.src = pokemon.sprites.front_default;
      nombre.innerText= pokemon.name;

      contenedorNombre.appendChild(imagen)
      contenedorNombre.appendChild(nombre)
      contenedorNombre.appendChild(idPokemon)

     return pokemonNombre.appendChild(contenedorNombre)
}




function idCompleto(id){
    if(id.toString().length>=1 && id.toString().length<2){
       return id = "#00" + id
    }
    else if(id.toString().length>=2 && id.toString().length<3){
        return id = "#0"+ id
    }
    else if(id.toString().length>=3){
        return id = "#"+ id
    }
}

const pokeColores = {
    electric: "#ffea70",
    normal: "#b09398",
    fire: "#ff675c",
    water: "#0596c7",
    ice: "#afeafd",
    rock:"#999799",
    flying:"#7ae7c7",
    grass:"#4a9681",
    psychic:"#ffc6d9",
    ghost: "#561d25",
    bug: "#a2faa3",
    poison: "#795663",
    ground: "#d2b074",
    dragon: "#da627d",
    steel: "#1d8a99",
    fighting: "#2f2f2f",
    default: "#2a1a1f"
}

