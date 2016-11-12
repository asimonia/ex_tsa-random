let left = document.getElementById("left");
let right = document.getElementById("right");


window.addEventListener('click', function() {
	let chosenValue = Math.random() < 0.5 ? true : false;

	if (chosenValue) {
		left.classList.remove("hide");
		right.setAttribute("class", "hide");
	} else {
		right.classList.remove("hide");
		left.setAttribute("class", "hide");
	}	
});