//Object Instance to the class

let taskManager = new TaskManager(0);
console.log(taskManager);

//Getting the input values from Form 
const form = document.getElementById('form');
const username = document.getElementById('name');
const descriptionBox = document.getElementById('description');
const assignedTo = document.getElementById('assignedTo');
const dueDate = document.getElementById('duedate');
const validateStatus = document.getElementById('status');
const submitBtn = document.getElementById('submitBTN');

//Selected due date should be greater then current date

let today =  new Date();
 var dd = ("0" + today.getDate()).slice(-2);
 var mm = today.getMonth()+1; 
 var yyyy = today.getFullYear();
    if(mm<10)  {
         mm='0'+mm;
     }
 today = yyyy + "-" + mm + "-" + dd;
  
  console.log(today);
  console.log(dueDate.value);
  


// Form Validation Logic
  function submitForm (event) {

  event.preventDefault(); 
  console.log(`Form submitted!`);

    
  if (username.value.length <= 8 || username.value === "" ) {
    
    document.getElementById('error-name').innerHTML = "Name should be more then 8 characters";
    return false;
    }

  if ( descriptionBox.value.length <= 15 || descriptionBox.value === "") {
   
    document.getElementById('error-description').innerHTML = "Description should be more then 15 characters";
    return false;
  }

  if (assignedTo.value.length <= 8 || assignedTo.value === "" ) {
   
    document.getElementById('error-assignee').innerHTML= 'Assigned to text should be more then 8 characters';
    return false;
  }


  if (dueDate.value == '' || dueDate.value < today) {
  
  document.getElementById('error-ddate').innerHTML = "The Date must be Bigger or Equal to today date";
  return false;
  }

  
  if (validateStatus.selectedIndex === 0) {
   
    document.getElementById('error-status').innerHTML = 'Please select an status option';
    return false;
  }

 //Adding functions to submit button
  toAddTasks();

};

//Event handler for submit button
form.addEventListener("submit",submitForm)



//Displaying current date on landing page
function currentDate () {
  const el = document.getElementById('date');
  const current= new Date();
  const day =  current.getDate();
  const month = current.getMonth()+1;
  const year = current.getFullYear();
  
  // returns the final date with backslash (/) separator
  const date = `${day}/${month}/${year}`;
  el.textContent = date;

}
currentDate(); //Calling the current date function

//Function to combine all other function 
function toAddTasks() {
  
  taskManager.addTask(username.value, descriptionBox.value, assignedTo.value, dueDate.value, validateStatus.value);
  taskManager.render();
       
}

