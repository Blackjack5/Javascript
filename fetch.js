var url = "https://pokeapi.co/api/v2/";
function getPokemon() {
    p = document.getElementById("choix").value;
    getPokemon1(p); 
} 
function getPokemon1(p) {
    return p;
}
fetch(url + "pokemon/"+ "butterfree")
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
.catch(error => alert("Erreur : Oups un problème est survenu avec notre API"))