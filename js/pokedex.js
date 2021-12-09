const pokemonNombre = document.getElementById("pokemon")
const inputBuscador= document.getElementById("heroBuscador")
const btnBuscador = document.getElementById("heroBtn")

btnBuscador.onclick = ()=>{
    console.log("Pokemon: "+inputBuscador.value);

    let nombrePokemon = inputBuscador.value

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then((pokemon)=>{
      console.log(pokemon);
        
    })
    .catch((error)=>{
        console.log(error);
    })


}