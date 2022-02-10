const pokemonNombre = document.getElementById("pokemon")

const inputBuscador= document.getElementById("heroBuscador")
const btnBuscador = document.getElementById("heroBtn")

const nuevoContenedor = document.getElementById("poke-encontrado")
const nuevo =document.createElement("div")
const btnCerrar = document.getElementById("poke-encontado-btn")
const contenedorEncontrar = document.getElementById("encontrado")

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
    fairy:"#ff93e5",
    default: "#2a1a1f"
}

btnBuscador.onclick = ()=>{
    let nombrePokemon = inputBuscador.value
    nombrePokemon= nombrePokemon.toLowerCase();
    contenedorEncontrar.classList.remove("activar")
    id(nombrePokemon)
}


const infoPokemon = (pokemon) => {
    for(let x=1;x<=pokemon;x++){
        id(x)
    }
}


/* ************  Petición  ************ */
const id = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(respuesta){
        return respuesta.json()
    })

    .then((pokemon)=>{
        if(isNaN(`${id}`)) {
            pokemonBuscado(pokemon)
        }else {
            creacionCard(pokemon)
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}


const pokemonBuscado = (pokemon) => {

    const {types} = pokemon 

    const color = pokeColores[types[0].type.name]
    nuevoContenedor.style.background = `${color}`


      let idPokemon= document.createElement("label")
      let imagen = document.createElement("img")
      let nombre = document.createElement("p")
      let detallesLink = document.createElement("a")
     
      nuevo.classList.add("pokemon-encontrado")
      idPokemon.classList.add("pokemon-encontrado__id")
      imagen.classList.add("pokemon-encontrado__img") 
      nombre.classList.add("pokemon-encontado__nombre")
      detallesLink.classList.add("link-detalles")
      detallesLink.classList.add("link-detalles__poke")

      idPokemon.innerText = idCompleto(pokemon.id)
     
      imagen.src = pokemon.sprites.front_default;
      nombre.innerText= pokemon.name;

      detallesLink.innerText= "Ver Pokémon"
      detallesLink.href=`/pokeDetalles.html?id=${pokemon.id}`

      nuevo.appendChild(imagen)
      nuevo.appendChild(idPokemon)
      nuevo.appendChild(nombre)
      nuevo.appendChild(detallesLink)

      nuevoContenedor.appendChild(nuevo)
}

btnCerrar.onclick = () => {
    contenedorEncontrar.classList.add("activar")
}




const creacionCard = (pokemon) => {

    let contenedorNombre= document.createElement("div")
    
    let contenedorPokemon = document.createElement("div")
    contenedorPokemon.classList.add("contenedor-pokemon")
    
    const {types} = pokemon 

    const color = pokeColores[types[0].type.name]
    contenedorPokemon.style.background = `${color}`


      let idPokemon= document.createElement("label")
      let imagen = document.createElement("img")
      let nombre = document.createElement("p")
      let detallesLink = document.createElement("a")
     
      contenedorNombre.classList.add("contenedor-nombre")
      idPokemon.classList.add("id-pokemon")
      imagen.classList.add("imagen-pokemon")
      nombre.classList.add("nombre-pokemon")
      detallesLink.classList.add("link-detalles")

      idPokemon.innerText = idCompleto(pokemon.id)
     
      imagen.src = pokemon.sprites.front_default;
      nombre.innerText= pokemon.name;

      detallesLink.innerText= "Ver Pokémon"
      detallesLink.href=`/pokeDetalles.html?id=${pokemon.id}`

      contenedorNombre.appendChild(nombre)
      contenedorNombre.appendChild(idPokemon)
      contenedorNombre.appendChild(detallesLink)

      contenedorPokemon.appendChild(contenedorNombre)
      contenedorPokemon.appendChild(imagen)

     return pokemonNombre.appendChild(contenedorPokemon)
}


const idCompleto = (id) => {
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


infoPokemon(150)