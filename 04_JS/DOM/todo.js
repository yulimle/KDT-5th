const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

function addList() {
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요");
  } else {
    const li = document.createElement("li");
    const checkBtn = document.createElement("input");
    checkBtn.setAttribute("type", "checkbox");
    li.append(checkBtn);
    li.append(todoList);
  }
}

checkBtn.addEventListener("click", function () {
  if (checkBtn.checked === true) {
    checkBtn.parentNode.style.textDecoration = "line-through";
  } else {
    checkBtn.parentNode.style.textDecoration = "none";
  }
});
addList.append(checkBtn);
