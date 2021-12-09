const pokemonNombre = document.getElementById("pokemon")

function id(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(respuesta){
        return respuesta.json()
    })
   // .then((data)=> console.log(data))

    .then((pokemon)=>{
        let contenedorNombre= document.createElement("div")
       
        let idPokemon= document.createElement("label")
        let imagen = document.createElement("img")
        let nombre = document.createElement("p")

       
        contenedorNombre.classList.add("contenedorNombre")
        idPokemon.classList.add("idPokemon")
        imagen.classList.add("imagenPokemon")
        nombre.classList.add("nombrePokemon")

        
        if(pokemon.id.toString().length>=1 && pokemon.id.toString().length<2){
            idPokemon.innerText= "#00"+ pokemon.id
        }
        else if(pokemon.id.toString().length>=2 && pokemon.id.toString().length<3){
            idPokemon.innerText= "#0"+ pokemon.id
        }
        else if(pokemon.id.toString().length>=3){
            idPokemon.innerText= "#"+pokemon.id
        }

        imagen.src = pokemon.sprites.front_default;
        nombre.innerText= pokemon.name;

      
        contenedorNombre.appendChild(imagen)
        contenedorNombre.appendChild(nombre)
        contenedorNombre.appendChild(idPokemon)
        
        pokemonNombre.appendChild(contenedorNombre)

        
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

infoPokemon(12)





const inputBuscador= document.getElementById("heroBuscador")
const btnBuscador = document.getElementById("heroBtn")

btnBuscador.onclick = ()=>{
    console.log("Pokemon: "+inputBuscador.value);

    let nombrePokemon = inputBuscador.value

    let contenedorNombre= document.createElement("div")

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then((pokemon)=>{
      console.log(pokemon);
      
      let contenedorId = document.createElement("div");
      let pokebola = document.createElement("img")
     
      let idPokemon= document.createElement("label")
      let imagen = document.createElement("img")
      let nombre = document.createElement("p")

     
      contenedorNombre.classList.add("contenedorNombre")
      contenedorId.classList.add("contenedorId");
      pokebola.classList.add("pokebola")
      imagen.classList.add("imagenPokemon")

      
      if(pokemon.id.toString().length>=1 && pokemon.id.toString().length<2){
          idPokemon.innerText= "#00"+ pokemon.id
      }else if(pokemon.id.toString().length>=2 && pokemon.id.toString().length<3){
          idPokemon.innerText= "#0"+ pokemon.id
      }else if(pokemon.id.toString().length>=3){
          idPokemon.innerText= pokemon.id
      }

      imagen.src = pokemon.sprites.front_default;
      nombre.innerText= pokemon.name;
      pokebola.src = "imagenes/pokebola.png"

      contenedorId.appendChild(pokebola);
      contenedorId.appendChild(idPokemon)
      contenedorNombre.appendChild(contenedorId)

      contenedorNombre.appendChild(imagen)
      contenedorNombre.appendChild(nombre)

      pokemonNombre.appendChild(contenedorNombre)




        
    })
    .catch((error)=>{
        console.log(error);
    })


}