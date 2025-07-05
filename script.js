let m=1;
function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskText = taskInput.value.trim();

      if (taskText === "") return;

      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-start";

      const span = document.createElement("span");
      span.className = "task-text";
      span.textContent =m+" ) "+taskText;
      m++;

      const btnGroup = document.createElement("div");
      btnGroup.className = "todo-buttons";
       alert("one task added successfully");
      // Complete Button
      const completeBtn = document.createElement("button");
    completeBtn.className = "btn btn-success btn-sm";
            completeBtn.innerText = "ON";

            completeBtn.onclick = function () {
        span.classList.toggle("completed");
        completeBtn.innerText = "COMPLETED";
            completeBtn.className = "btn btn-fail btn-sm";
            alert("Congrats One task completed")
      }
    

      
        // completeBtn.
      

      // Edit Button
      const editBtn = document.createElement("button");
    //   editBtn.className = "btn btn-warning btn-sm";
      editBtn.innerText = "✎";
      editBtn.onclick = function () {
        const newText = prompt("Edit task:", span.textContent);
        if (newText !== null && newText.trim() !== "") {
          span.textContent = newText.trim();
        }
      };

      // Delete Button
      const deleteBtn = document.createElement("button");
    //   deleteBtn.className = "btn btn-danger btn-sm";
      deleteBtn.innerText = "❌ ";
      deleteBtn.onclick = function () {
        li.remove();
        alert("task removed successfully")
        m--
      };

      btnGroup.appendChild(completeBtn);
      btnGroup.appendChild(editBtn);
      btnGroup.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(btnGroup);

      document.getElementById("taskList").appendChild(li);
      taskInput.value = "";
    }
  