/*
Note: I can't add sound files in Codepen, so my drumkit does not play sounds.
*/

function playThis(e) {
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	
	if (!audio) {
		return;
		// Stops the function if no audio element is found. 
	}
	
	audio.currentTime = 0; // Reset Sound
	audio.play(); // Plays the sound
	
	console.log(key);
	
	key.classList.add('playing');
	// This is the JS equivilant to .addClass in jQuery
}

function removeTransitionEnd(e) {
	if (e.propertyName !== 'transform') {
		return;	
	}
	this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
//console.log(keys);

keys.forEach(key => key.addEventListener('transitionend', removeTransitionEnd));

window.addEventListener('keydown',playThis)
/* takeaway:
	The difference between const and let is that once a const has been defined and given a certain value,
	it is no longer changable. Let can however be transmuted. 
	
	$ {} are Template literals are string literals allowing embedded expressions.
	
*/