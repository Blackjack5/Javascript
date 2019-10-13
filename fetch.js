var p
function getPokemon() {
    p = document.getElementById("choix").value  
    return p;
}   
fetch("https://pokeapi.co/api/v2/pokemon")
.then(response => response.json())
.then (json => {
    let ul = document.querySelector('#pokemons')
    json.results.forEach(pokemon => {
    let li = document.createElement('li')
    let txt = document.createTextNode(pokemon.name)
    li.appendChild(txt)
    ul.appendChild(li)
    })
    })
