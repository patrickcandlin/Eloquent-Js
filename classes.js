class Matrix {
    constructor(width, height, element = (x,y) => undefined){
        this.width = width
        this.height = height
        this.content = []

        for(let y = 0; y < height; y = y + 1){
            for(let x = 0; x < width; x = x + 1){
                this.content[y + width + x] = element(x, y);
            }
        }
    }
    get(x,y){
        return this.content[y * this.width + x];
    }
    set(x, y, value){
        this.content[y * this.width + x] = value;
    }
}

class MatrixIterator{
    constructor(matrix){
        this.x = 0;
        this.y = 0;
        this.matrix = matrix
    }
    next() {
        if (this.y == this.matrixheight) return {done: true}; 

        let value = {x: this.x,
                     y: this.y,value: 
                     this.matrix.get(this.x, this.y)}
        this.x = x + 1
        if (this.x == this.matrix.width){
            this.x = 0
            this.y = y + 1
        }
        return {value, done: false }
    }
}

Matrix.prototype[Symbol.iterator] = function () {
    return new MatrixIterator(this);
}

let matrix = new Matrix(2, 2, (x,y) => `vale ${x }`)