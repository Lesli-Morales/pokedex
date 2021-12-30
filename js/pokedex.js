const pokemonNombre = document.getElementById("pokemon")

const inputBuscador= document.getElementById("heroBuscador")
const btnBuscador = document.getElementById("heroBtn")

const nuevoContenedor = document.getElementById("poke-encontrado")
nuevoContenedor.classList.add("pokemon-encontrado__div")

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

function infoPokemon(pokemon){
    for(let x=1;x<=pokemon;x++){
        id(x)
    }
}

btnBuscador.onclick = ()=>{
    let nombrePokemon = inputBuscador.value
    id(nombrePokemon)
}

function pokemonBuscado(pokemon) {
    document.getElementById("poke-encontrado").innerHTML = ""
    const nuevo =document.createElement("div")

    const {types} = pokemon 

    const color = pokeColores[types[0].type.name]
    nuevo.style.background = `${color}`


      let idPokemon= document.createElement("label")
      let imagen = document.createElement("img")
      let nombre = document.createElement("p")
      let detallesLink = document.createElement("a")
     
      nuevo.classList.add("pokemon-encontrado")
      /* idPokemon.classList.add("idPokemon")
      imagen.classList.add("imagenPokemon")
      nombre.classList.add("nombrePokemon")
      detallesLink.classList.add("link-detalles") */

      idPokemon.innerText = idCompleto(pokemon.id)
     
      imagen.src = pokemon.sprites.front_default;
      nombre.innerText= pokemon.name;

      detallesLink.innerText= "Ver Pokémon"
      detallesLink.href=`/pokeDetalles.html?id=${pokemon.id}`

      nuevo.appendChild(imagen)
      nuevo.appendChild(nombre)
      nuevo.appendChild(idPokemon)
      nuevo.appendChild(detallesLink)

      nuevoContenedor.appendChild(nuevo)
}

function id(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(respuesta){
        return respuesta.json()
    })

    .then((pokemon)=>{
        console.log(pokemon);
        if(isNaN(`${id}`)) {
            console.log("Hola");
            pokemonBuscado(pokemon)
        }else {
            creacionCard(pokemon)
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}


function creacionCard(pokemon){

    let contenedorNombre= document.createElement("div")
    
    const {types} = pokemon 

    const color = pokeColores[types[0].type.name]
    contenedorNombre.style.background = `${color}`


      let idPokemon= document.createElement("label")
      let imagen = document.createElement("img")
      let nombre = document.createElement("p")
      let detallesLink = document.createElement("a")
     
      contenedorNombre.classList.add("contenedorNombre")
      idPokemon.classList.add("idPokemon")
      imagen.classList.add("imagenPokemon")
      nombre.classList.add("nombrePokemon")
      detallesLink.classList.add("link-detalles")

      idPokemon.innerText = idCompleto(pokemon.id)
     
      imagen.src = pokemon.sprites.front_default;
      nombre.innerText= pokemon.name;

      detallesLink.innerText= "Ver Pokémon"
      detallesLink.href=`/pokeDetalles.html?id=${pokemon.id}`

      contenedorNombre.appendChild(imagen)
      contenedorNombre.appendChild(nombre)
      contenedorNombre.appendChild(idPokemon)
      contenedorNombre.appendChild(detallesLink)

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


infoPokemon(9)