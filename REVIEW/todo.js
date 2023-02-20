const inputTask = document.querySelector(".input-task");
const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");

//추가 버튼을 누르면
function addList() {
  //아무것도 입력 안했을 때 상황종료
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요!");
    return;
  }
  //입력 했을 때
  //1.요소 생성
  const addLi = document.createElement("li");
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";

  //2.요소 기능 추가
  checkBox.addEventListener("click", function () {
    if (checkBox.checked === true) {
      checkBox.parentNode.style.textDecoration = "line-through";
    } else {
      checkBox.parentNode.style.textDecoration = "none";
    }
  });
  deleteBtn.addEventListener("click", function (e) {
    //어떤 버튼이 클릭됐는지 확인하기 위해 target
    e.target.parentNode.remove();
  });

  //3.요소 append
  addLi.append(checkBox);
  addLi.append(inputTask.value);
  addLi.append(deleteBtn);
  todoList.appendChild(addLi);
  inputTask.value = "";
}

addBtn.addEventListener("click", addList);
