// const createTaskHtml = (id, username, description, assignedTo, dueDate,  validateStatus) => {

//     const newForm = ` 
//     <div class="card"  data-task-id="${id}" style="width: 22rem; margin: 10%; box-shadow: 4px 4px ;">
//         <div class="card-body">
//              <h5 class="card-title">Name:  ${username}</h5>
//               <p class="card-subtitle mb-2 text-muted">Description:  ${description}</p>             
//              <h6 class="card-subtitle mb-2 text-muted" id="assignedToInput">Assignee:  ${assignedTo}</h6>
//              <h6 class="card-subtitle mb-2 text-muted">Due Date:  ${dueDate}</h6>
//              <h6 class="card-subtitle mb-2 text-muted">Status:  ${validateStatus}</h6>

//               <div class="row">
//               <div class="col">
//                   <a href="#" class="btn btn-primary">Delete</a>
//                </div>
//                <div class="col">
//                 <a href="#" class="btn btn-primary done-button">Mark as done</a>
                
//                </div>
//                </div>
//         </div>
//     </div>`

// return newForm;
    
// }

class TaskManager{

    constructor(currentId =0) {
        this.tasks = [];
        this.currentId = currentId;
        
    }

    addTask(username, descriptionBox, assignedTo, dueDate,  validateStatus) {
        const task = {
          id: this.currentId++,
          name: username,
          descriptionBox: descriptionBox,
          assignedTo: assignedTo,
          dueDate: dueDate,
          status: validateStatus,
        };
                
        this.tasks.push(task);
        console.log(`$(task.id) \n $(task.name)\n $(task.descriptionBox)\n $(task.assignedTo)\n $(task.dueDate) \n $(task.status)`);    
        return task
      }
 
    }


     
//localStorage.setItem("task", JSON.stringify(task));

