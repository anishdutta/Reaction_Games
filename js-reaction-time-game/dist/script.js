window.onload = function() {
	
	
	var createdTime, 
		clickedTime, 
		reactionTime,
		avgReactionTime = 0,
		counter = 1;

	//cache
	var titleArea = document.getElementById('title-area');
	var gameArea = document.getElementById('game-area');
	var restart = document.getElementById('restart');
	var exit = document.getElementById('exit');
	var stat = document.getElementById('stat');
	var theCircle = document.getElementById('the-circle');
	var btnStart = document.getElementById('btn-start');
	var score = document.getElementById('score');


	//start game
	btnStart.onclick = function() {

		reactionTime = 0;
		score.textContent = "";

		titleArea.className = "hide";
		gameArea.className = "show";

		startGame();

	}

	function startGame() {

		var time = Math.random();
		time *= 3000;

		setTimeout(react, time);
	}


	//react
	function react() {

		var x = Math.random() * 300;
		var y = Math.random() * 250;

		theCircle.src = "http://www.confeafa.org/images/boton-verde.png";
		theCircle.style.left = x + "px";
		theCircle.style.top = y + "px";
		createdTime = Date.now();

		theCircle.onclick = function() {

			clickedTime = Date.now();
			reactionTime = (clickedTime - createdTime) / 1000;
			this.src = "";
			score.textContent = reactionTime + ' s';
			
			avgReactionTime = (avgReactionTime + reactionTime);
			stat.textContent = (avgReactionTime / counter).toFixed(3);
				
			
			console.log(reactionTime);
			
			counter++;
			//continue playing | loop
			startGame();
		};

	}

	//restart game
	restart.onclick = function(e) {

		reactionTime = 0;
		avgReactionTime = 0;
		counter = 1;
		score.textContent = "";
		stat.textContent = "";
		
		startGame();

	}

	//exit game
	exit.onclick = function(e) {
		titleArea.className = "show";
		gameArea.className = "hide";
		
		stat.textContent = "";
	}



}