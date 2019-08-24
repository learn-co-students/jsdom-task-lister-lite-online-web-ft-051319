document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form")
  const submitButton = document.querySelector(".submit")
  const inputField = document.querySelector("#new-task-description")
  const list = document.querySelector("#tasks")
  const deleteButton = document.querySelector("#delete")

  submitButton.addEventListener("click", handleClick);
  console.log(list.innerHTML)
  function handleClick(event) {
    event.preventDefault()
    //GOAL: Display the input in the UL list
    //Step 1: * Assign the list ELEMENT where we'll put the entered task to a variable
    //Step 2: * Assign the input ELEMENT where we write the task to a variable
    //Step 3: * Assign the input value from the variable we got in step 2 to a variable
    //Step 4: * Put the variable with theinput value into an <li></li> string
    //Step 5: * Add that string to the .innerHTML of the UL list
    //Step 6: * Clear the input so that it's ready for a new task

    let newItem = inputField.value
    let listEntry = `<li>${newItem}</li>`
    //let listEntry = document.createElement("li")
    //listEntry.innerContent = newItem 
    //list.appendChild(listEntry)
    list.innerHTML += listEntry
    inputField.value = ""

    //`<li>task1</li>
    //<li>task2</li>
    //<li>${newItem}</li>`
  };

  // deleteButton.addEventListener("click", function() {
    // <button id="delete">X</button>
    // list.innerHTML.remove()
  // });
});

//element.addEventListener("whateverEvent", callback)
//what goes in the callback argument is either a REFERENCE to a function
//OR (an anonymous) function definition/declaration
// named function: 
// function namedFunction () {
//   return "Hi!"
// }
// anonymous function:
// function () {
  // return "Hi"
//}
//because we didn't NAME the function, that function declaration is usesless
// we mostly use anonymous functions where we would write callbacks
// BECAUSE we probably don't need it anywhere else 

//this will make it so that there's now a variable called
//namedFunction that is a REFERENCE (or variable that holds) this function
//
//reference (just the varialbe that holds it): 
//namedFunction
// => function {}
//invocation (the parentheses makes the event fire):
//namedFunction()
// => "Hi!"

//---function/method declaration/definition---
//Ruby
//def named_function(argument)
// prints argument
//end 
//
//JS: 
// function namedFunction(argument){
//   return argument
// }
//---function invocation---
// Ruby
//named_function(argument)
// => return is whatever the arg is
//
//JS
//namedFunction(argument)
// => return is whatever the arg is

// THE DIFFERENCE IS
//in Ruby, just writing the name INVOKES the function
//in JS, just writing the name REFERENCES the function
//in JS, you need () to INVOKE the function 

