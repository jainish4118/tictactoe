let arr = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
let turn = 0;

const handleclick = (row, col) => {
    if (!arr[row][col]) {
        arr[row][col] = turn % 2 == 0 ? "O" : "X";
        turn = turn + 1;
        document.getElementById("cell" + row + col).innerHTML = arr[row][col];
        if (arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2]) {
            winner = arr[0][0];
        }
        else if (arr[1][0] == arr[1][1] && arr[1][1] == arr[1][2]) {
            winner = arr[1][0];
        }
        else if (arr[2][0] == arr[2][1] && arr[2][1] == arr[2][2]) {
            winner = arr[2][0];
        }
        else if (arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0]) {
            winner = arr[0][0];
        }
        else if (arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1]) {
            winner = arr[0][1];
        }
        else if (arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2]) {
            winner = arr[0][2];
        }
        else if (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) {
            winner = arr[0][2];
        }
        else if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
            winner = arr[0][0];
        }
        else if (!winner) {
            let tie=1;
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    if (arr[row][col] === null) {
                        tie=0;
                        break;
                    }
                }
            }
            if (tie) {
                winner = 'TIE';
            }
        }
        if (winner) {
            document.getElementById('winner').innerHTML = "WINNER:" + winner;
        }
    }
};
