// variables for canvas
let canvasBoard;
const boardWidth = 360;
const boardHeight = 640;
let context;
let birdImg;

// variables for bird
const birdWidth = 34;  // width/height ratio is 408/288 px hence scaled by x1/12.
const birdHeight = 24;
const birdX = boardWidth/8;
const birdY = boardHeight/2;

//Object for bird
let bird ={
        x: birdX,
	y: birdY,
	width: birdWidth,
	height: birdHeight

}

//Pipe variables
let pipeArray = [];
const pipeWidth = 64 ; // pipe image width/height ratio is 384/3072 px hence scaled by x1/8
const pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

// Physics
const velocityX = -2; //pipes move 2px to the left torward flappy bird.
let velocityY = 0;
let gravity = 0.4;

// Game 
let gameOver = false;
let score = 0;

// Initial onload function
window.onload = function() {
	// setup canvas
	canvasBoard = document.getElementById("canvasBoard");
	canvasBoard.width = boardWidth;
	canvasBoard.height = boardHeight;
	context = canvasBoard.getContext("2d"); // for drawing on a canvas

// draw flappy bird on canvas
	// context.fillStyle = "green";
	// context.fillRect(bird.x, bird.y, bird.width, bird.height);
	
	birdImg = new Image();
	birdImg.src = "./assets/flappybird.png";
	birdImg.onload = function() {
		context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
	}
	
	// load pipe Img
	topPipeImg = new Image();
	topPipeImg.src = "./assets/toppipe.png";

	bottomPipeImg = new Image();
	bottomPipeImg.src = "./assets/bottompipe.png";


	requestAnimationFrame(update); // this calls the update function when the browser refreshes the screen hence we repaint our canvas at the same rate as the canvas for good animation.
	setInterval(placePipes, 1500); // this is like a timer that calls the fxn at the set  interval, here we call place pipes every 1.5 seconds
	document.addEventListener("keydown",moveBird);
}

function update(){
	if (gameOver) return;
	requestAnimationFrame(update);
	context.clearRect(0, 0, boardWidth, boardHeight);

	// Redrawing the bird
	velocityY += gravity // this updates the velocity with change in time 
	// bird.y += velocityY; // this updates the position with change in time
	bird.y = Math.max(bird.y + velocityY, 0); // make sure the max bird position is 0.

	if(bird.y >= boardHeight) gameOver = true;

	context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

	// Drawing the Pipes
	for (let i=0; i < pipeArray.length; i++){
		let pipe = pipeArray[i];
		pipe.x += velocityX; //updating the position of the pipe
	

		context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

		if(!pipe.passed && bird.x > pipe.x + pipe.width){
			score += 0.5;
			pipe.passed = true;
		}

		// check for collision
		if (checkCollision(pipe, bird)) gameOver = true;	
	}

	// clear pipes
	while (pipeArray.length > 0 && pipeArray[0].x < -pipeArray[0].width) pipeArray.shift(); // remove the first item in array since it is off canvas and any other item off canvas.

	context.fillSyle = "Black";
	context.font = "45px sans-serif";
	context.fillText(score, 5, 45);
	if (gameOver) context.fillText("GAME OVER", 5, 90)
	
}

function placePipes(){
	if (gameOver) return;

	// we want pipe height to range between 384px - 128px
	// Math.random() return a random float between 0 - 1.
	let randomPipeY =pipeY - (pipeHeight/4) - Math.random()*(pipeHeight/2);
	const openingSpace = boardHeight/4;

	let topPipe = {
		img: topPipeImg,
		x: pipeX,
		y: randomPipeY,
		width : pipeWidth,
		height : pipeHeight,
		passed : false 
	}

	pipeArray.push(topPipe);

	let bottomPipe = {
		img: bottomPipeImg,
		x: pipeX,
		y: topPipe.y + pipeHeight + openingSpace,
		width : pipeWidth,
		height : pipeHeight,
		passed : false 
	}
	
	pipeArray.push(bottomPipe);

}

function moveBird(e){
	if (e.code == "Space" || e.code == "ArrowUp" || e.code == "keyX"){

		//Jump
		velocityY = -6;

		//reset game
		if (gameOver) {
			score = 0;
			bird.y = birdY;
			pipeArray = [];
			gameOver = false;
			update();
		}

	}


}
function checkCollision(a, b){

	return ( a.x < b.x + b.width &&
 		 a.x + a.width > b.x &&
		 a.y < b.y + b.height &&
		 a.y + a.height > b.y );

}

