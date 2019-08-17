document.getElementById('create-task-form').addEventListener("submit", function(event){
  let msg = document.getElementById("new-task-description").value;
  let list = document.getElementById('list');
  list.innerHTML+= `<li>${msg} <button class='delete-task' id='delete-${msg}'>X</button></li>`;
  event.preventDefault();
});

// let done = document.querySelectorAll('.delete-task');
// done.addEventListener('click',function(){
//   let li = this.parentNode;
//   li.remove();
// });
