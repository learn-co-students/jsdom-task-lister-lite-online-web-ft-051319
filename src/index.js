document.addEventListener("DOMContentLoaded", () => {
    let tasks = document.querySelector("#tasks")
    let submitButton = document.querySelector("#submit")
    
    submitButton.addEventListener("click", function(event) {
        event.preventDefault()
        let newTask = document.querySelector("#new-task-description").value
        let listItem = `<li>${newTask}<button id="${newTask}">X</button></li>`
        tasks.innerHTML += listItem
    });

    // tasks.addEventListener("click", function(event) {
    //     console.log(event.target);
    // });

});