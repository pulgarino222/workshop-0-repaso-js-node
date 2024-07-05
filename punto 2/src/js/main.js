import "../scss/style.scss"


const url = 'http://localhost:3000/tareas';

let form = document.querySelector("#form")
let imageTask = document.querySelector("#image")
let nameTask = document.querySelector("#nameTask")
let descriptionTask = document.querySelector("#description")

let main = document.querySelector("#main")

btn.addEventListener("click", (e) => {
  e.preventDefault()
  console.log('hola');
})


let index = async (main, url) => {
  const data = await fetch(url)
  const dataReal = await data.json()
  for (let i = 0; i < dataReal.length; i++) {
    main.innerHTML += `
      
      <div class="card m-3" style="width: 18rem;">
          <img src=${dataReal[i].image}
              class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">tarea: ${dataReal[i].nameTask}</h5>
              <p>descripcion: ${dataReal[i].description} </p>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
              <label class="form-check-label" for="flexCheckChecked">
              ¿importante?
              </label>
              </div>
              <div>
                  <button type="button" class="btn btn-danger m-2" id="${dataReal[i].id}">delete</button>
                  <button type="button" class="btn btn-warning" id="${dataReal[i].id}">edit</button>
              </div>
          </div>
      </div> `
  }

}


index(main, url)


//this function inner a new information in the database 
async function newData(nameTask, descriptionTask, imageTask) {
  let newobject = {
    nameTask: nameTask.value,
    description: descriptionTask.value,
    image: imageTask.value,
    complete: false
  }
  await fetch(url, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify(newobject)
  })
}










