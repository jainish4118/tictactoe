let arr = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
let turn = 0;
const handleclick = (row, col) => {
    let winner = null;
    if (!arr[row][col]) {
        arr[row][col] = turn % 2 == 0 ? "O" : "X";
        turn = turn + 1;
        document.getElementById("cell" + row + col).innerHTML = arr[row][col];
        
        if (arr[0][0] && arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2]) {
            winner = arr[0][0];
        }
        else if (arr[1][0] && arr[1][0] == arr[1][1] && arr[1][1] == arr[1][2]) {
            winner = arr[1][0];
        }
        else if (arr[2][0] && arr[2][0] == arr[2][1] && arr[2][1] == arr[2][2]) {
            winner = arr[2][0];
        }
        else if (arr[0][0] && arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0]) {
            winner = arr[0][0];
        }
        else if (arr[0][1] && arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1]) {
            winner = arr[0][1];
        }
        else if (arr[0][2] && arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2]) {
            winner = arr[0][2];
        }
        else if (arr[0][2] && arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) {
            winner = arr[0][2];
        }
        else if (arr[0][0] && arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
            winner = arr[0][0];
        }
        console.log(winner)
      
        if (winner) {
            document.getElementById('winner').innerHTML = "WINNER:" + winner;
        }
    }
};
