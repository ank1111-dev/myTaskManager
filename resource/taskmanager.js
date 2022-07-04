//Creating the card format to display on the browser

const createTaskHtml = (id, username, descriptionBox, assignedTo, dueDate,  validateStatus) => {

    const newForm = ` 
    <div class="card" style="width: 20rem; margin: 10%; box-shadow: 4px 4px ;" data-task-id=${id}>
  <div class="card-body">
    <h5 class="card-title">Name:  ${username}</h5>
    <br>
    <p class="card-subtitle mb-2">Description:  ${descriptionBox}</p>
    <br>
    <h6 class="card-subtitle mb-2">Due Date:  ${dueDate}</h6>
    <br>
    <h6 class="card-subtitle mb-2" id="assignedToInput">Assignee:  ${assignedTo}</h6>
    <br>
    <h6 class="card-subtitle mb-2">Status:  ${validateStatus}</h6>
    <br>
     <div class="row">
      <div class="col">
        <a href="#" class="btn btn-primary">Delete</a>
      </div>
      <div class="col">
        <a href="#" class="btn btn-primary done-button ml-5">Done</a>
      </div>
    </div>
  </div>
</div>`


return newForm;
    
}

//Creating class to add task
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
        console.log(`$(task.id) \n $(task.username)\n $(task.descriptionBox)\n $(task.assignedTo)\n $(task.dueDate) \n $(task.validateStatus)`);    
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

      //Displaying Task function

      render() {

        const tasksHtmlList = [];
    
        for (let i = 0; i < this.tasks.length; i++) {
          const task = this.tasks[i];
    
          const date = new Date(task.dueDate);
          const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    
          const taskHtml = createTaskHtml(task.id, task.username, task.descriptionBox, task.assignedTo, formattedDate, task.validateStatus);
    
          tasksHtmlList.push(taskHtml);
        }
    
        const tasksHtml = tasksHtmlList.join("\n");
    
        const tasksList = document.getElementById('tasksList');
        tasksList.innerHTML = tasksHtml;
      }

     
    }




