//Creating the card format to display on the browser

const createTaskHtml = (id, username, descriptionBox, assignedTo, dueDate,  validateStatus) => {

    const newForm = ` 
    <div class="card text-left mx-3 mb-4 mt-3" style="width: 18rem; box-shadow: 4px 4px ; height: " data-task-id=${id} >
  <div class="card-body">
    <h5 class="card-title">Name:  ${username}</h5>
     <p class="card-subtitle mb-2 mt-1">Description:  ${descriptionBox}</p>
      <h6 class="card-subtitle mb-2 mt-1">Due Date:  ${dueDate}</h6>
       <h6 class="card-subtitle mb-2 mt-1" id="assignedToInput">Assignee:  ${assignedTo}</h6>
        <h6 class="card-subtitle mb-2 mt-1">Status:  ${validateStatus}</h6>
      <div class="row">
      <div class="col">
        <a href="#" class="btn btn-danger delete-button">Delete</a>
      </div>
      <div class="col">
        <a href="#" class="btn btn-success done-button ${validateStatus == "Done" ? "d-none" : ""}">Mark as Done</a>
      </div>
    </div>
  </div>
</div>`


return newForm;
    
}

//Creating class to create an object
class TaskManager{

    constructor(currentId =0) {
        this.tasks = [];
        this.currentId = currentId;
        
    }
  //Add the task to array
    addTask(username, descriptionBox, assignedTo, dueDate,  validateStatus) {
        const task = {
          id: this.currentId++,
          username: username,
          descriptionBox: descriptionBox,
          assignedTo: assignedTo,
          dueDate: dueDate,
          validateStatus: validateStatus,
        };
                
        this.tasks.push(task);
        console.log(`${task.id} \n ${task.username}\n ${task.descriptionBox}\n ${task.assignedTo}\n ${task.dueDate} \n ${task.validateStatus}`);    
        return task
      }

      // Getting the task by id

      getTaskById(taskId) {

        let objTask;
        for (let i = 0; i < this.tasks.length; i++) {
          const task = this.tasks[i];
    
          if (task.id === taskId) {
            objTask = task;
          }
        }
        
        return objTask;
      }

      

  //Displaying Task function to browser

  render() {
    let todo = [];
    let review = [];
    let inprogress = [];
    let done = [];

    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      const date = new Date(task.dueDate);
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

      const taskHtml = createTaskHtml(
        task.id,
        task.username,
        task.descriptionBox,
        task.assignedTo,
        formattedDate,
        task.validateStatus
      );
      switch (task.validateStatus) {
        case "To Do":
          todo.push(taskHtml);
          break;
        case "In Progress":
          inprogress.push(taskHtml);
          break;
        case "Review":
          review.push(taskHtml);
          break;
        case "Done":
          done.push(taskHtml);
          break;
        default:
          console.error("Status not found");
      }
    }
    const todoHTML = todo.join("\n");
    const reviewHTML = review.join("\n");
    const inprogressHTML = inprogress.join("\n");
    const doneHTML = done.join("\n");
    document.querySelector("#todo").innerHTML = todoHTML;
    document.querySelector("#review").innerHTML = reviewHTML;
    document.querySelector("#inprog").innerHTML = inprogressHTML;
    document.querySelector("#done").innerHTML = doneHTML;
    // const todolist = document.querySelector("#todo");
    // todolist.innerHTML = todoHTML;
  }

 //Saving data to local storage
  saveStorage() {
    
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", tasksJson);

    const currentId = String(this.currentId);
    localStorage.setItem("currentId", currentId);
  }
  
  loadStorage() {
    
    let storageOutput = localStorage.getItem("tasks");
    let storageId = localStorage.getItem("currentId");
    
    if (storageOutput) {
      const tasksJson = localStorage.getItem("tasks");
      this.tasks = JSON.parse(tasksJson);
    }

    if (storageId) {
      const currentId = localStorage.getItem("currentId");
      this.currentId = Number(currentId);
    }
  }
  //Delete the task from browser and local storage
  deleteTask(taskId) {
    const newTasks = [];
    
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      if (task.id !== taskId) {
        newTasks.push(task);
        }

      }
      this.tasks = newTasks;
    }
}