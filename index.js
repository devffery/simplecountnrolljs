const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
	count++;
	countLabel.textContent =count;
}

decreaseBtn.onclick = function () {
	count--;
	countLabel.textContent =count;
}

resetBtn.onclick = function () {
	count = 0;
	countLabel.textContent =count;
}

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById('myLabel');
const min = 1;
const max = 6;

myButton.onclick = function(){
	randonNum = Math.floor(Math.random() * max) + min;
	myLabel.textContent = `You rolled: ${randonNum}`;
}