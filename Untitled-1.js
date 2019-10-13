fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response => response.json())
.then (json => {
    let ul = document.querySelector('#pokemons')
    json.results.forEach(pokemon => {
    let li = document.createElement('li')
    let txt = document.createTextNode(pokemon.name)
    li.appendChild
    ul.appendChild(li)

    fillPokemonDetail(pokemon)
    fetch('https://pokeapi.co/api/v2/stat/')
    .then(content => li.appendChild(content))

    })
    })
})

function fillPokemonDetail(pokemon) {
    return fetch(pokemon.url)
    .then(response => response.json())
    .then(details => {
        let stats = details.stats
        let div = document.createElement('div')
    div.textContent
        return div

    })
}







fetch(//URL API//)
.then(response => response.json)
.then(result => {// CHOISI PAR DEV/
    let manga = result.data.attatributes
let h1 = document.querySelector('[data-title]') // SELECTIONNE DANS LE HTML data-title
    h1.appendChild(document.createTextNode(manga.titles.en)) // AJOUTE DANS DATA TITLE
let nextRelease = moment(manga.nextRelease).format('DD/MM/YYYY')
let release = document.querySelector('[data-release]')
release.appendChild(document.createTextNode(nextRelease))
})