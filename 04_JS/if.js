//if 문
if (false) {
  console.log("true 입니다");
} else if (true) {
  console.log("elseif 문 내부입니다.");
} else {
  console.log("false 입니다");
}

//조건 비교
let age = 39;

if (age > 40) {
  console.log("그는늙었습니다.");
} else if (age <= 40 && age >= 20) {
  console.log("그는 MZ입니다.");
} else {
  console.log("그는 애기입니다.");
}

//if문 중첩
let isOld = true;
let isRich = false;

if (isOld) {
  if (isRich) {
    console.log("망했어요");
  } else {
    console.log("낫 베드");
  }
} else {
  if (isRich) {
    console.log("대박");
  } else {
    console.log("부럽");
  }
}

//Not 연산자
// let otherAge = 16;
// let isAdult = otherAge > 19;
// console.log(isAdult);
// if (!isAdult) {
//   console.log("돌아가");
// } else {
//   console.log("통과");
// }

//다중비교
//여성이고, 이름이 Jane이거나 성인이면 통과
// let gender = "M";
// let name = "Tom";
// let isAdultTome = true;
// if (gender === "F" && (name === "Jane" || isAdultTome === true)) {
//   console.log("통과");
// } else {
//   console.log("돌아가");
// }

//실습
// let isAdult = false;
// let vip = false;
// let isDruken = true;
// money = false;
// if (isAdult === true || vip === true) {
//   if (isDruken === true) {
//     console.log("돌아가");
//   } else {
//     console.log("통과");
//   }
// } else {
//   if (money === true) {
//     console.log("통과");
//   } else {
//     console.log("돌아가");
//   }
// }

const 이효석 = {
  성인인가: false,
  VIP: true,
  취했는가: false,
  돈: false,
};

if (이효석.돈 || (!이효석.취했는가 && (이효석.성인인가 || 이효석.VIP))) {
  console.log("통과");
} else {
  console.log("돌아가");
}
