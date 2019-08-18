const form = document.getElementById("create-task-form")

const tasks = document.getElementById("tasks")

form.addEventListener("submit", function(e)/*callback function */{
  e.preventDefault() /*stops form from submitting before rest of function code is evaluated */

  const newTask = document.getElementById("new-task-description").value

  tasks.innerHTML += `
  <li> ${newTask} 
  <button data-description="${newTask}">X</button>
  </li>
  `

  form.reset()

  tasks.addEventListener("click", function(e){
    if(e.target.dataset.description == `${newTask}`) {
      e.target.parentElement.remove()
      /* parent element of each X button is the newTask li element is sits in */
    }
  })
  
  })
