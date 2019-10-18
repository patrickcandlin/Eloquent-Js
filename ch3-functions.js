/*The differece between let, const, var:
let and const- has scope that is limited to the block in which its binding is set.
var- has scope that is global to the function where its binding is defined.

*/

let x = 10
if(true){
    let y = 20
    var z = 40
    console.log(x + y + z)
}
console.log(x + z)

// in the below example the binding for n's scope is defined globally and locally within the block.
// The program is able to keep the scope of n local to the function thus n only refers to the local n.

const halve = (n) => n/2
let n = 10
console.log(halve(60))
console.log(halve(n))
console.log(n)

