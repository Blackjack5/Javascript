fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json =>{
    let el
    el = document.querySelector('#Title')
    el.textContent= json.title
    el = document.querySelector('#completed')
    el.textContent = json.completed
    if (!json.completed){
      el.style.fontWeight ='bold'
    }
  })




fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json=> {
    let el = document.querySelector('[data-photos]')
    json.slice(0, 10).forEach(photo => {
      let img = new Image()
      img.src = photo.url
      el.appendChild(img)
    })
  })
  

  
    
      