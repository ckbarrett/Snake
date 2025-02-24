///////////////// Button Functions ///////////////////////
// Hard reset storage to restart the learning processes
function resetJimmy() {
	console.log("Jimmy has been wiped.");
	// Wipe storage
	window.localStorage.setItem("age", 0);
	window.localStorage.setItem("highscore", 0);
	window.localStorage.setItem("training", 0);
	window.localStorage.setItem("sets", 0);

	// Reset HTML elements
	document.getElementById("generation-counter").innerText =
		(window.innerWidth < 500 ? "Gens: " : "Generations: ") + 0;
	document.getElementById("set-counter").innerText = "Sets: " + 0;
	document.getElementById("training-counter").innerText = "Trained: " + 0;

	document.getElementById("score-counter").innerText = "High Score: " + 0;
	document.getElementById("highscore").innerText = "High Score: " + 0;

	// Create new brain and overwrite old brain
	qlearner.brain = new Network(
		inputLayerSize,
		hiddenLayerSize,
		hiddenLayerSize,
		4
	);
	uploadBrain();
	restartGame();
}

function createSliders() {
	// Create outside div
	sliderDiv = createDiv();
	sliderDiv.elt.style.display = "block";

	// Create hidden layer size slider
	hls_slider = createSlider(1, 60, 30, 1);
	hls_slider.parent(document.getElementById("jimmybrainslider"));
	hls_slider.elt.style.flex = 1;
	console.log(hls_slider);
	hls_slider.addClass("align-middle");
}

function pauseJimmy() {
	frameRate(0);
	document.getElementById("pause").style.display = "none";
	document.getElementById("play").style.display = "flex";
}

function playJimmy() {
	frameRate(60);
	document.getElementById("pause").style.display = "flex";
	document.getElementById("play").style.display = "none";
}

function viewBrain() {
	document.getElementById("jimmybrain").style.display = "flex";
	document.getElementById("jimmybrainslider").style.display = "block";
}

// Create event listeners and onclick functions for all buttons
function setButtons() {
	document.getElementById("reset").onclick = resetJimmy;
	document.getElementById("pause").onclick = pauseJimmy;
	document.getElementById("play").onclick = playJimmy;
	document.getElementById("viewbrain").onclick = viewBrain;
	document.getElementById("pause").style.display = "flex";
	document.getElementById("jimmybrainslider").style.display = "none";
	document.getElementById("play").style.display = "none";
}
///////////////// End Button Functions /////////////////////
