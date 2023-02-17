let nums = [-1.23, 13, 14.52, -33.53, 30];
console.log(Math.floor(Math.max(...nums)));
console.log(Math.floor(Math.min(...nums)));

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += Math.abs(nums[i]);
}
console.log(sum / nums.length);

console.log(Math.floor(Math.random() * 100));
