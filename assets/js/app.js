const myList = document.addEventListener("submit", (ev) => {
  const addToDo = document.querySelector("#addTodo").value;

  const toDoList = document.querySelector(".todolist");

  const newListItem = document.createElement("li");

  newListItem.textContent = addToDo;

  toDoList.appendChild(newListItem);
  const icones = document.createElement("div");
  icones.className = "icones";
  newListItem.appendChild(icones);

  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete❌"; // اصلاح املای دکمه به "delete"

  // دکمه حذف را به عنوان فرزند به عنصر لیست جدید اضافه می‌کند
  icones.appendChild(deleteButton);

  // رویداد کلیک برای دکمه حذف تعریف می‌کند
  deleteButton.addEventListener("click", () => {
    // عنصر لیست را از لیست اصلی حذف می‌کند
    toDoList.removeChild(newListItem);
  });
  const editButton = document.createElement("button");
  editButton.textContent = "edit✅ ";
  icones.appendChild(editButton);
  const editInput = document.createElement("input");
  editInput.className = "editinput";
  editButton.addEventListener("click", () => {
    editInput.value = "";

    newListItem.removeChild(icones);
    newListItem.appendChild(editInput);
    newListItem.appendChild(saveButton);
  });

  const saveButton = document.createElement("button");
  saveButton.className = "savebutton";
  saveButton.textContent = "save✅";
  saveButton.addEventListener("click", () => {
    newListItem.textContent = editInput.value;
    newListItem.appendChild(icones);
    newListItem.removeChild(editInput);
  });

  ev.preventDefault();

  if (addToDo === "") {
    alert("OOPS..!you forgot to put a todo");
    toDoList.removeChild(newListItem);
    newListItem.textContent = "";
    newListItem.removeChild(icones);
  }

  ev.target.querySelector("#addTodo").value = "";
});
