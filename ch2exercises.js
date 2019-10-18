const chessBoard = (boardHight, boardWidth) => {
    let rowString = ""
    while(rowString.length <= boardWidth){
        if(rowString.length % 2 == 0){
            rowString = rowString + "#"
        }if(rowString.length % 2 !== 0){
            rowString = rowString + " "
        }
    }
    chessBoardMatrix =  Array(boardHight)
                        .fill(rowString)
                        .map((row, index) => {
                            if(index % 2 ==  0){
                                return row.split("").reverse("").join("")
                            }else{
                                return row
                            }
                        })
                        .map(row => console.log(row))

}

chessBoard(1,1)

const fizzBuzz = (start) => {
    if(start > 100) return;

    if((start % 3 === 0) && (start % 5 === 0) ){
        console.log("FizzBuzz")
    } else if( start % 3 === 0 ){
        console.log("Fizz")
    } else if(start % 5 === 0 ){
        console.log("Buzz")
    }else{
        console.log(start)
    }
    fizzBuzz(++start)
}

fizzBuzz(1)


