const nums = [10,20,30];
nums[2] = 99;
console.log(nums);
/*
function getLastValue(array) {
  console.log(array[array.length - 1]);
}

getLastValue(nums);

function arraySwap(array) {
  let x = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = x;
  console.log(array);
}

arraySwap(nums);


for (let i = 0; i < 11; i = i + 2) {
  console.log(i);
}

for(let j = 5; j >= 0; j--) {
  console.log(j);
}
*/
/*
let i = 0;
while(i < 11) {
  console.log(i);
  i = i + 2;
}

let nums2 = [];
for (let i = 0; i <= nums.length - 1; i++) {
  nums2[i] = nums[i] + 1;
}

console.log(nums2);*/

/*let m1 = [];
const m2 = [1, 2, 3];

function addOne(array1, array2) {
  for(let i = 0; i <= array1.length - 1; i++) {
    array2[i] = array1[i] + 1;
  }
  console.log(m1);
}

addOne(m2,m1);*/

const array1 = [1, 2, 3, 4, 5];
const x = 10;

function addNum(array, num) { 
  for (let i = 0; i <= array.length - 1; i++) {
    array[i] = array1[i] + num;
  }
  console.log(array);
}

addNum(array1, x);


function addArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    array1[i] = array1[i] + array2[i];
  }
  console.log(array1);
}

const a1 = [1, 1, 2];
const a2 = [1, 1, 3];

addArrays(a1, a2);

const p1 = [0, -1, -5, 2, 10, 3, 5];
let k = 0;

function countPositive(nums) {
  for (let i = 0; i <= nums.length - 1; i++) {
    if(nums[i] > 0) {
       k = k + 1;
    }
  }
  console.log(k);
}

countPositive(p1);


const arrayTest = [1,2,3,4,0,-1,99];
let min = arrayTest[0];
let max = arrayTest[0];

function minMax(nums) {

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] < min) {
      min = nums[i];
    } 
    if (nums[i] > max) {
      max = nums[i];
    } 
  }
  
  const obj = {
    min: min,
    max: max
  };
  
  if (nums.length === 0) {
    obj.min = null;
    obj.max = null;
  }
  console.log(obj);
}

minMax(arrayTest);



function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // result[word] adds/accesses a property using whatever is
    // saved inside the 'word' variable.
    // If word = 'apple', result[word] will do result['apple']
    // If word = 'grape', result[word] will do result['grape']
    if (result[word] === undefined) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }

  return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));


