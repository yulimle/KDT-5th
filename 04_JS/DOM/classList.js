const boxEl = document.querySelector(".box");
boxEl.classList.add("orange");
const thirdBoxEl = document.getElementById("third");
thirdBoxEl.classList.remove("box");

console.log(boxEl.classList.contains("box")); //해당 클래스가 있으면 true,없으면false
console.log(thirdBoxEl.classList.contains("box"));
