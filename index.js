let rainHTML = document.querySelector("button.rain");
let birdHTML = document.querySelector("button.natural");
let sound;
document.querySelector('button.rain').addEventListener('click', makePause);
document.querySelector('button.natural').addEventListener('click', makePause);

function makePause(){
	if(this.className === "rain"){
		sound = new Audio("rain.mp3");
		sound.loop = true; //makes the audio go around in loops
		document.querySelector('img').setAttribute('src','images/rain.jpg');
		sound.play();
	}
	else{
		sound = new Audio("nature.mp3");
		sound.loop = true;
		document.querySelector('img').setAttribute('src','images/forest.jpg');
		sound.play();
	}
		
	document.querySelector("button.rain").remove();
	document.querySelector("button.natural").remove();
	let container = document.createElement('button');
	container.className =  "pause";
	container.innerHTML = '<i class="fa fa-pause-circle"></i> Pause';
	container.setAttribute('id','buttons');
	document.querySelector("div.options").appendChild(container);
	document.querySelector('button.pause').addEventListener('click', setNormal);
}

function setNormal(){
	document.querySelector('div.options').textContent = '';
	document.querySelector("div.options").appendChild(rainHTML);
	document.querySelector("div.options").appendChild(birdHTML);
	sound.pause();
	document.querySelector('img').setAttribute('src','images/main.png');
}