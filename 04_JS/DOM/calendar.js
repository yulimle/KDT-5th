// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");

// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;

calendar.addEventListener("click", function (e) {
  targetEl = e.target;
  tag = e.target.tagName;
  if (tag === "P") {
    date.value = `2023년 2월 ${targetEl.childNodes[0].textContent}일`;
  }
});

function writeSchedule() {
  const contentBox = document.querySelector("#content");
  const scheduleEl = document.createElement("div");

  scheduleEl.textContent = contentBox.value;
  scheduleEl.addEventListener("click", function (e) {
    e.target.remove();
    contentBox.value = "";
  });
  targetEl.parentNode.append(scheduleEl);
}
