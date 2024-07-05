import "../scss/style.scss"
import * as bootstrap from 'bootstrap'

const url = 'http://localhost:3000/tareas'

let form = document.querySelector("#form")
let main = document.querySelector("#main")




let index = async (main, url) => {
  const data = await fetch(url)
  const dataReel = await data.json()
  for (let i = 0; i < dataReel.length; i++) {
    main.innerHTML += `
      
      <div class="card m-3" style="width: 18rem;">
          <img src=${dataReel[i].image}
              class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">tarea: ${dataReel[i].nameTask}</h5>
              <p>descripcion: ${dataReel[i].description} </p>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
              <label class="form-check-label" for="flexCheckChecked">
              ¿importante?
              </label>
              </div>
              <div>
                  <button type="button" class="btn btn-danger m-2" id="${dataReel[i].id}">delete</button>
                  <button type="button" class="btn btn-warning" id="${dataReel[i].id}">edit</button>
              </div>
          </div>
      </div> `
  }

}


index(main, url)


//this function inner a new information in the database 
async function newData (brand,model,image) {
  let newobject = {
      brand: brand.value,
      model: model.value,
      image: image.value
}
await fetch(url,{
  method:'POST',
  headers:{
      'content-Type':'application/json'
  },
  body:JSON.stringify(newobject)
})
  location.reload()
}








