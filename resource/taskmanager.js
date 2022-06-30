const createTaskHtml = (id, username, description, assignedTo, dueDate,  validateStatus) => {

    const newForm = ` 
    <div class="card"  data-task-id="${id}" style="width: 22rem; margin: 10%; box-shadow: 4px 4px ;">
        <div class="card-body">
             <h5 class="card-title">Name:  ${username}</h5>
              <p class="card-subtitle mb-2 text-muted">Description:  ${description}</p>             
             <h6 class="card-subtitle mb-2 text-muted" id="assignedToInput">Assignee:  ${assignedTo}</h6>
             <h6 class="card-subtitle mb-2 text-muted">Due Date:  ${dueDate}</h6>
             <h6 class="card-subtitle mb-2 text-muted">Status:  ${validateStatus}</h6>

              <div class="row">
              <div class="col">
                  <a href="#" class="btn btn-primary">Delete</a>
               </div>
               <div class="col">
                <a href="#" class="btn btn-primary done-button">Mark as done</a>
                
               </div>
               </div>
        </div>
    </div>`

return newForm;
    
}

class TaskManager{

    constructor(currentId =0) {
        this.tasks = [];
        this.currentId = currentId;
        
    }

    get tasks() {
        return this.tasks;
    }
    get current_id() {
        return this.currentid;
    }

    addTask(username, description, assignedTo, dueDate,  validateStatus) {
        const task = {
          id: this.currentId++,
          name: username,
          description: description,
          assignedTo: assignedTo,
          dueDate: dueDate,
          status: validateStatus,
        };

        console.log(task);    
        this.tasks.push(task);
      }

      getTaskById(taskId) 
      {
        console.log("in get task function");
          let foundTask;
          for(let i=0; i< this.tasks.length; i++) {
              const task = this.tasks[i];
              if(task.id == taskId) {
                  foundTask = task;
              }
          }
          console.log(foundTask);
          return foundTask;
      }   
        
}