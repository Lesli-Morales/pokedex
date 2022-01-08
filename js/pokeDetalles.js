const pokeDetallesDiv = document.getElementById("pokeDetalles")
const contenedorNombre = document.getElementById("pokeDetalles-container")

const query = window.location.search
const parametros = new URLSearchParams(query)
const id = parseInt(parametros.get("id"))

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

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then((pokemon)=>{
        creacionCard(pokemon)
    })
    .catch((error)=>{
        console.log(error);
    })


function creacionCard(pokemon){
    
    const {types} = pokemon 

    let tipo = types[0].type.name

    const color = pokeColores[tipo]
    document.body.style.background = `${color}`

      
    let pokeDetallesInfo = document.createElement("div")
    let pokeDetallesTipo = document.createElement("div")
    let pokeDetallesPeso = document.createElement("div")
    let pokeDetallesAltura = document.createElement("div")

      let idPokemon= document.createElement("label")
      let imagen = document.createElement("img")
      let nombre = document.createElement("p")
      let tipoD = document.createElement("p")
      let peso = document.createElement("p")
      let altura = document.createElement("p")
      let tipoEti = document.createElement("label")
      let pesoEti = document.createElement("label")
      let alturaEti = document.createElement("label")
      
     
      contenedorNombre.classList.add("pokeDetalles-container")
      pokeDetallesInfo.classList.add("pokeDetalles-info")
      imagen.classList.add("pokeDetalles-img")
      idPokemon.classList.add("pokeDetalles-id")
      nombre.classList.add("pokeDetalles-nombre")


      idPokemon.innerText = idCompleto(pokemon.id)
     
      imagen.src = pokemon.sprites.front_default;
      nombre.innerText= pokemon.name;

      tipoD.innerText = tipo
      tipoEti.innerText = "Tipo"
      peso.innerText= pokemon.weight
      console.log(pokemon.weight);
      pesoEti.innerText = "Peso"
      altura.innerText = pokemon.height
      alturaEti.innerText = "Altura"

      contenedorNombre.appendChild(imagen)
      contenedorNombre.appendChild(nombre)
      contenedorNombre.appendChild(idPokemon)
/* 
      pokeDetallesTipo.appendChild(tipoD)
      pokeDetallesTipo.appendChild(tipo)

      pokeDetallesPeso.appendChild(peso)
      pokeDetallesPeso.appendChild(pesoEti)

      pokeDetallesAltura.appendChild(altura)
      pokeDetallesAltura.appendChild(alturaEti)

      pokeDetallesInfo.appendChild(pokeDetallesTipo)
      pokeDetallesInfo.appendChild(pokeDetallesPeso)
      pokeDetallesInfo.appendChild(pokeDetallesAltura) */

     return  pokeDetallesDiv.appendChild(contenedorNombre)
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