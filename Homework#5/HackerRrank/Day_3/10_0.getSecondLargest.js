//Arrays
function getSecondLargest(nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  let n = nums.length;
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  if (1 <= n && n <= 10 && 0 <= min && max <= 100) {
    // 1 <= nums.length <= 10 ,    0 <=  nums[i] <= 100
    return nums[nums.indexOf(max) - 1];
  }
  let error = new Error("Not valid input");
  return error;
}

console.log(getSecondLargest([10, 9, 9, 11, 8, 0, 9, 11, 11])); //10
console.log(getSecondLargest([])); //Error: Not valid input
console.log(getSecondLargest([1, -5, 5, 10])); //Error: Not valid input
