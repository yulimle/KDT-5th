console.log(new Date().getDay());

// let gender = "M";
// switch (gender) {
//   case "F":
//     console.log("여성 입니다.");
//     break;
//   case "M":
//     console.log("남성 입니다.");
//     break;
//   default:
//     console.log("외계인 입니다.");
//     break;
// }

let date = new Date().getDay();
if (date === 0) {
  alert("일요일");
} else if (date === 1) {
  alert("월요일");
} else if (date === 2) {
  alert("화요일");
} else if (date === 3) {
  alert("수요일");
} else if (date === 4) {
  alert("목요일");
} else if (date === 5) {
  alert("금요일");
} else if (date === 6) {
  alert("토요일");
}
