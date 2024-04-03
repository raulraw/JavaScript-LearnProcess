
//Accept user input
/*let username;

document.getElementById("mySubmit").onclick = function() {
  username = document.getElementById("myText").value;
  console.log(username);

  document.getElementById("myH1").textContent = `Hello ${username}`;
}*/



//Type Conversion

/*let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/


//Constants

/*let pi = 3.14159;
let radius;
let circumference;

radius = Number(radius);

circumference = 2 * pi * radius;

document.getElementById("mySubmit").onclick = function() {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * pi * radius;

  document.getElementById("myH3").textContent = circumference + "cm";
}*/



//Counter Program

/*const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
  count++;
  countLabel.textContent = count;
}

resetBtn.onclick = function() {
  count = 0;
  countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
  if(count > 0) {
    count --;
  }
  countLabel.textContent = count;
}*/

//Random Number generator

/*const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNum); */

/*const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("label1");
const myLabel2 = document.getElementById("label2");
const myLabel3 = document.getElementById("label3");

const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {

  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;

  myLabel1.textContent = randomNum1;
  myLabel2.textContent = randomNum2;
  myLabel3.textContent = randomNum3;

}*/



//If statements
/*const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

  age = myText.value;
  age = Number(age);

  if(age >= 100) {
    resultElement.textContent = `You are TOO OLD to enter this site`;
  }
  else if(age ==0) {
    resultElement.textContent = `You can't enter. You were just born.`;
  }
  else if(age >= 18) {
    resultElement.textContent = `You are old enough to enter this site.`;
  }
  else if(age < 0){
    resultElement.textContent = `Your age can't be below 0`;
  }
  else {
    resultElement.textContent = `You must be 18+ to enter this site`;
  }

};*/


//Checked property

/*const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {

  if(myCheckBox.checked) {
    subResult.textContent = `You are subscribed!`

    if(visaBtn.checked) {
      paymentResult.textContent = `You are paying with Visa!`;
    } else if (masterCardBtn.checked) {
      paymentResult.textContent = `You are paying with MasterCard!`;
    } else if (payPalBtn.checked) {
      paymentResult.textContent = `You are paying with PayPal!`;
    } else {
      paymentResult.textContent = `You must select a payment type!;`
    }

  } else {
    subResult.textContent = `You are not subscribed!`;

    if(visaBtn.checked) {
      paymentResult.textContent = `You cant't pay without being subscribed!`;
    } else if (masterCardBtn.checked) {
      paymentResult.textContent = `You cant't pay without being subscribed!`;
    } else if (payPalBtn.checked) {
      paymentResult.textContent = `You cant't pay without being subscribed!`;
    } else {
      paymentResult.textContent = `Ok so you don't want to be one of our member, bye!;`
    }
  }

}*/

