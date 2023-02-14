let orangeClassEl = document.querySelector(".orange");
console.log(orangeClassEl);

let skyblueIdEl = document.getElementById("skyblue");
console.log(skyblueIdEl);

let secondLiEl = document.querySelector("ul>li:nth-child(2)");
secondLiEl.classList.add("orange");
console.log(secondLiEl);

let isContains = orangeClassEl.classList.contains("orange");

if (isContains) {
  orangeClassEl.classList.remove("orange");
}
console.log(orangeClassEl);
