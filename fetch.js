function getPokemon() {
    var p = document.getElementById("choix").value; 
console.log(p);
}   
fetch('https://pokeapi.co/api/v2/pokemon/')
.then(reponse => reponse.json())
.then (json => {
    let ul = document.querySelector('#pokemons');
    json.results.forEach(pokemon => {
        let li = document.createElement('li')
        let txt = document.createTextNode(pokemon.name)
        li.appendChild
        ul.appendChild(li)
    })
})

