const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function letsSetADate() {
	
	// new Date object
	// It has to be specified like this
	let now = new Date();
	let seconds = now.getSeconds();
	let secondsDegrees = ((seconds / 60) * 360) + 90;
	// applies a CSS style to my .second-hand class
	// Similar to jQuery's .css function
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	// If using string concatenation
	//secondHand.style.transform = 'rotate(' + secondsDegrees + 'deg)';
	
	
	// Minute Calculation
	let minutes = now.getMinutes();
	let minutesDegrees = ((minutes / 60) * 360 ) + 90;
	minHand.style.transform = `rotate(${minutesDegrees}deg)`;
	
	// Hour Calculation
	let hours = now.getHours();
	let hoursDegrees = ((hours / 12 ) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}


setInterval( letsSetADate, 1000);
// Set interval executes a function, in this case the "letsSetADate" function, every second