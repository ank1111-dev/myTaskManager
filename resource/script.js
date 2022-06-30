let taskManager = new TaskManager(0);

const form = document.getElementById('form');
const username = document.getElementById('name');
const descriptionBox = document.getElementById('description');
const assignedTo = document.getElementById('assignedTo');
const dueDate = document.getElementById('duedate');
const validateStatus = document.getElementById('status');

//Due date Logic
  let ToDate = new Date();
  dueDateInput = new Date (dueDate.value);
 //console.log(ToDate);
  //console.log(dueDateInput);
  
//Validation Logic
form.addEventListener('submit',function(e) { 

   if (username.value.length <= 8 || username.value === "" ) {
    e.preventDefault();
    document.getElementById('error-name').innerHTML = "Name should be more then 8 characters";
    }

  if ( descriptionBox.value.length <= 15 || descriptionBox.value === "") {
    e.preventDefault();
    document.getElementById('error-description').innerHTML = "Description should be more then 15 characters";
  }

  if (assignedTo.value.length <= 8 || assignedTo.value === "" ) {
    e.preventDefault();
    document.getElementById('error-assignee').innerHTML= 'Assigned to text should be more then 8 characters';
  }


  // if (dueDate.value == '' || Date.parse(dueDateInput) < ToDate.getTime()) {

  //e.preventDefault();
  
  //  document.getElementById('error-ddate').innerHTML = "The Date must be Bigger or Equal to today date";

  // }

  if (validateStatus.selectedIndex == 0) {
    e.preventDefault();
    document.getElementById('error-status').innerHTML = 'Please select an status option';
  }

taskManager.addTask(username, description, assignedTo, dueDate,  validateStatus);

      
});

//Displaying curret date on page
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
currentDate();

