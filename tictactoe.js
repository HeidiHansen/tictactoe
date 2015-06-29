function tictactoe(GAME, n){
	function loop(method){
		for (var i = 0; i < n; i ++){
			result = method(i);

			if (result) return result;
		}
		return false;
	}

	function rowWinner(){
		return loop(function(i){
			row = GAME[i];

			for(var col = 1; col < n; col++){
				curr = row[col];
				prev = row[col-1];

				if(curr != prev) return false;
			}
			return row[n-1];
		});
	}

	function colWinner(){
		return loop(function(i){
			var row, curr;

			for(row = 0; row < n; row++){
				curr = GAME[row][i];

				if(row > 0){
					var prev = GAME[row-1][i];
					if(curr != prev) return false;
				}
			}
			return curr;
		});
	}	

	function leftDiagWinner(){
		for(var i = 0; i < n; i++){
			var curr = GAME[i][i];

			if(i > 0){
				var prev = GAME[i-1][i-1];

				if(curr != prev) return false;
			}
		}
		return curr;
	}

	function rightDiagWinner(){
		for(var i = 0; i < n; i++){
			var curr = GAME[i][n-i-1];

			if(i > 0){
				var prev = GAME[i-1][n-i]; 

				if(curr != prev) return false;
			}	
		}	
		return curr;
	}

	function diagWinner(){
		return leftDiagWinner() || rightDiagWinner();
	}

	function checkEmptySpaces(){
		for (var i = 0; i < n; i++){

			for (var j = 0; j < n; j++){
				
				if (GAME[i][j] == '') return true;
			}
		}
		return false;
	}

	function format(game_result){
		return 'Winner' + game_result.toUpperCase();
	}

	var rowWin = rowWinner();
	if (rowWin) return format(rowWin);

	var colWin = colWinner();
	if (colWin) return format(colWin);

	var diagWin = diagWinner();
	if (diagWin) return format(diagWin);

	return (checkEmptySpaces()) ? 'null' : 'CatsGame';
}

var game = [
	['x','x','o'],
	['o','x','x'],
	['o','o','x']
];
console.log(tictactoe(game, 3) == 'WinnerX');
var game2 = [
	['x','x','o'],
	['o','o','o'],
	['x','o','x']
];
console.log(tictactoe(game2, 3) == 'WinnerO');
var game3 = [
	['x','x',''],
	['','o','x'],
	['x','o','o']
];
console.log(tictactoe(game3, 3) == 'null');
var game4 = [
	['x','x','o'],
	['o','o','x'],
	['x','o','o']
];
console.log(tictactoe(game4, 3) == 'CatsGame');
var game5 = [
	['o','x','o'],
	['o','x','x'],
	['o','o','x']
];
console.log(tictactoe(game5, 3) == 'WinnerO');
var game6 = [
	['','x','o'],
	['x','o','x'],
	['o','o','x']
];
console.log(tictactoe(game6, 3) == 'WinnerO');

