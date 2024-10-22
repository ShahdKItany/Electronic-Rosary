const incrementButton1 = document.getElementById('incrementButton1');
const incrementButton2 = document.getElementById('incrementButton2');
const incrementButton3 = document.getElementById('incrementButton3');
const incrementButton4 = document.getElementById('incrementButton4');
const incrementButton5 = document.getElementById('incrementButton5');

const counterElement1 = document.getElementById('counter1');
const counterElement2 = document.getElementById('counter2');
const counterElement3 = document.getElementById('counter3');
const counterElement4 = document.getElementById('counter4');
const counterElement5 = document.getElementById('counter5');

let counterValue1 = 0;
let counterValue2 = 0;
let counterValue3 = 0;
let counterValue4 = 0;
let counterValue5 = 0;

incrementButton1.addEventListener('click', function() {
  counterElement1.textContent = ++counterValue1;
});

incrementButton2.addEventListener('click', function() {
  counterElement2.textContent = ++counterValue2;
});

incrementButton3.addEventListener('click', function() {
  counterElement3.textContent = ++counterValue3;
});

incrementButton4.addEventListener('click', function() {
  counterElement4.textContent = ++counterValue4;
});

incrementButton5.addEventListener('click', function() {
  counterElement5.textContent = ++counterValue5;
});
