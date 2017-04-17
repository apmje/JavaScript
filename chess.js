// Create string of size 8 x 8
// Alternating # and ' ' to seperate lines, similar to a chess board.
// Define a variable once complete which can change the size ouputting a grid of the given width/height.

var size = 8, board = '';

for (i = 0; i < size; i++) {

    for (j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) 
            board += " ";
        else 
        board += '#';
    }
    
    board += '\n';
}
console.log(board);

//Didn't figure this out for myself. :(