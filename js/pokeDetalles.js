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

    let pokeDetalle = document.createElement("div");
    let pokePerfiles = document.createElement("div")

      let idPokemon= document.createElement("label")
      let imagen = document.createElement("img")
      let imagenShiny = document.createElement("img")
      let nombre = document.createElement("p")
   
      
     
      contenedorNombre.classList.add("pokeDetalles-container")
      pokeDetalle.classList.add("pokeDetalle")
      pokePerfiles.classList.add("pokePerfiles");
      imagen.classList.add("pokeDetalles-img")
      idPokemon.classList.add("pokeDetalles-id")
      nombre.classList.add("pokeDetalles-nombre")


      imagen.src = pokemon.sprites.front_default;
      nombre.innerText= pokemon.name;
      idPokemon.innerText = idCompleto(pokemon.id)

    pokeDetalle.innerHTML = `
        <div>
            <p>${pokemon.height}m</p> 
            <label>Altura</label>
        </div>
        <div>
            <p>${tipo}</p> 
            <label>Tipo</label>
        </div>
        <div>
            <p>${pokemon.weight}Kg</p> 
            <label>Peso</label>
        </div>`;
     
        pokePerfiles.innerHTML = `
            <p> ${pokemon.name} Shiny</p>
            <img src=" ${imagenShiny.src = pokemon.sprites.front_shiny}">
            <img src=" ${imagenShiny.src = pokemon.sprites.back_shiny}">
        `;

   

        contenedorNombre.appendChild(nombre)
        contenedorNombre.appendChild(idPokemon)
        contenedorNombre.appendChild(pokeDetalle);
        contenedorNombre.appendChild(pokePerfiles)
        
        
    pokeDetallesDiv.appendChild(imagen)
    pokeDetallesDiv.appendChild(contenedorNombre)
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