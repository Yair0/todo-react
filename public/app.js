function storeTask() {
  console.log("Stores the task");
  // Javascript
  let taskDescription = document.getElementById("task_description").value;
  console.log("Task description is " + taskDescription);

  // jQuery
  //let taskDescriptionJQ = $("#task_description").val();
  //console.log("Task description is " + taskDescriptionJQ);

  let payload = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ description: taskDescription }),
  };
  fetch("/tasks", payload)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw "Error en la llamada Ajax";
      }
    })
    .then((task) => {
      document.getElementById("task_description").value = "";
      addTask(task);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

function addTask(task) {
  let html = `
  <div class="card my-3" id=${task.id}>
        <div class="card-body">
          <h3 class="card-title ">${task.description}</h3>
          <p class="card-text">
          <a id="${task.id}-done" href="#" onclick="done(${task.id})" class="card-link btn btn-info">Done</a>
          <a href="#" onclick="remove(${task.id})" class="card-link btn btn-warning">Delete</a>
          </p>
        </div>
      </div>
  `;
  let node = document.createRange().createContextualFragment(html);
  document.getElementById("task_list").prepend(node);
}

function done(id) {
  $.ajax({
    url: "/tasks/" + id,
    method: "put",
    success: () => {
      document.getElementById(id + "-done").remove();
    },
    error: () => {
      console.log("Error in done");
    },
  });
}
function remove(id) {
  $.ajax({
    url: "/tasks/" + id,
    method: "delete",
    success: () => {
      document.getElementById(id).remove();
    },
    error: () => {
      console.log("Error in delete");
    },
  });
}
