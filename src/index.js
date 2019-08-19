var newNode= " ";

document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

let button = document.getElementById("button")
button.addEventListener(`click`, getInput)

function getInput(e){
    let response = document.getElementById("new-task-description").value;
    document.getElementById("tasks").innerHTML += `<li>${response}</li>`;
    alert(response)
    e.preventDefault()
}


