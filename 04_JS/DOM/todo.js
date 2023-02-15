const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

addBtn.addEventListener("click", function () {
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요.");
  } else {
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    const deleteBtn = document.createElement("button");
    checkBox.setAttribute("type", "checkbox");
    deleteBtn.textContent = "삭제";
    li.textContent = inputTask.value;
    li.prepend(checkBox);
    todoList.append(li);
    li.append(deleteBtn);

    checkBox.addEventListener("click", function () {
      if (checkBox.checked === true) {
        checkBox.parentNode.style.textDecoration = "line-through";
      } else {
        checkBox.parentNode.style.textDecoration = "none";
      }
    });
    deleteBtn.addEventListener("click", function () {
      if (checkBox.checked == true) {
        li.remove();
      }
    });
  }
});
