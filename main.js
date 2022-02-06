//Function that is called whenever a button is pressed
function placeMark(cell){  
    //Checks if the game has already been won
    if(notWon()){
        //Places an X or O in the box depending 
        var button = document.getElementById('b'.concat('',cell));
        if(button.textContent == ''){
            if(checkTurn()){
                button.textContent = 'O';
                button.className = 'btn btn-primary';
            }
            else{
                button.textContent = 'X';
                button.className = 'btn btn-danger';
            }
        }

        //Checks if this caused a win or a tie
        if(!checkWin()){
            checkTie();
        }
    }
}

//Resets board to be blank and result bar to default
function reset(){
    for (var i = 1; i < 10; i++) {
        var button = document.getElementById('b'.concat('',i.toString()));
        button.textContent = '';
        button.className = 'btn btn-secondary';
    }
    var result = document.getElementById('result-display');
    result.textContent = 'Tic-Tac-Toe';
}

//Code that checks whose turn it is based on the number or x's and o's placed
function checkTurn(){
    var count = 0;
    for (var i = 1; i < 10; i++) {
        var button = document.getElementById('b'.concat('',i.toString()));
        if(button.textContent != '')
            count += 1;
    }

    return count%2;
}

//Code that checks if there was win
function checkWin(){
    var values = '_'; //Underscore is for easier visualization of the board for the if statements below
    var winningCells = '';

    //Creates a string of all the values of the board
    for (var i = 1; i < 10; i++) {
        var button = document.getElementById('b'.concat('',i.toString()));
        if(button.textContent == '')
            values = values.concat('',' ');
        else
            values = values.concat('',button.textContent);
    }

    //Checks value string for a winning pair
    if(values.charAt(1) == values.charAt(2) && values.charAt(1) == values.charAt(3) && values.charAt(1) != ' ')
        winningCells = '123';
    else if(values.charAt(4) == values.charAt(5) && values.charAt(4) == values.charAt(6) && values.charAt(4) != ' ')
        winningCells = '456';
    else if(values.charAt(7) == values.charAt(8) && values.charAt(9) == values.charAt(7) && values.charAt(7) != ' ')
        winningCells = '789';
    else if(values.charAt(1) == values.charAt(4) && values.charAt(1) == values.charAt(7) && values.charAt(1) != ' ')
        winningCells = '147';
    else if(values.charAt(2) == values.charAt(5) && values.charAt(2) == values.charAt(8) && values.charAt(2) != ' ')
        winningCells = '258';
    else if(values.charAt(3) == values.charAt(6) && values.charAt(3) == values.charAt(9) && values.charAt(3) != ' ')
        winningCells = '369';
    else if(values.charAt(1) == values.charAt(5) && values.charAt(1) == values.charAt(9) && values.charAt(1) != ' ')
        winningCells = '159';
    else if(values.charAt(3) == values.charAt(5) && values.charAt(3) == values.charAt(7) && values.charAt(3) != ' ')
        winningCells = '357';

    //Checks if there was a win and highlights it in green
    if(winningCells != ''){
        var char = '';
        for (var i = 0; i < 3; i++) {
            var button = document.getElementById('b'.concat('',winningCells.charAt(i)));
            button.className = 'btn btn-success';
            char = button.textContent;
        }

        var result = document.getElementById('result-display');
        if(char == 'X')
            result.textContent = 'Player X Wins!';
        else
            result.textContent = 'Player O Wins!';
    }

    //Returns a boolean with whether or not there was a win
    return (winningCells != '');
}

//Code goes through and checks to see if any of the boxes are green, which would denote a win
function notWon(){
    var result = true;
    for (var i = 1; i < 10; i++) {
        var button = document.getElementById('b'.concat('',i.toString()));
        if(button.className == 'btn btn-success')
            result = false;
    }

    return result;
}

//Checks if all boxes are filled in and then prints a Draw message
function checkTie(){
    var result = true;
    for (var i = 1; i < 10; i++) {
        var button = document.getElementById('b'.concat('',i.toString()));
        if(button.textContent == '')
            result = false;
    }
    
    if(result){
        var result = document.getElementById('result-display');
        result.textContent = 'Draw! No one wins!';
    }
}