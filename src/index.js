

// console.log(taskForm);
// console.log(taskList);
// console.log(taskDescription);



document.addEventListener("DOMContentLoaded", () => {
 
  let taskForm = document.getElementById("create-task-form");
  let taskList = document.getElementById("tasks");
  let taskDescription = document.getElementById("new-task-description");
      
      taskForm.addEventListener("submit", function(e)
      {
        e.preventDefault();
        let newTask = taskDescription.value ;
        taskList.innerHTML += `<ul>${newTask}</ul>`; 
        taskDescription.value = ""
       
})
});
