// Create a todo list appcapable of storing your todosin loaclstorage. Add an option to creates, delete and access all the todos.
// Try to make ui as good as possible

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Add todo
addBtn.addEventListener("click", () => {
  const task = input.value.trim();

  if (task !== "") {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    input.value = "";
  } else {
    alert("Please enter a task.");
  }
});

// Add on Enter key
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
