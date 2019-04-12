const sliders = document.querySelectorAll('.controls input');

function updateVariables() {
	let varUnit = this.dataset.sizing || '';
	// We add the logical or statement, because the color value does not need a suffix
	// Dataset is an Object that contains all the data- attributes that have been defined.
	document.documentElement.style.setProperty(`--${this.name}`, this.value + varUnit);
	// document.documentElement returns the root element of the document. 
}


sliders.forEach(sliders => sliders.addEventListener("change", updateVariables));
sliders.forEach(sliders => sliders.addEventListener("mousemove", updateVariables));