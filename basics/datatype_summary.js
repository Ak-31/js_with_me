/* Types of Data have been classified on the basis of whether they could be reffered or not 
  Primitive Data Types : Number, Boolean, String, undefined, null, BigInt, Symbol



  Non Primitive DataTypes : Array, Object, Functions 
*/

let a = Symbol("1254")
let b = Symbol("1254")

console.log("This is used to check if the data obtained from different Symbol are same or not")
console.log(a===b) //This Strict Check with datatype if the value obtained is same along with same datatype 

// Primitive Datatype uses : Stack as Memory (and while we store in another variable it creates a copy )
// While for Non Primitive Datatype uses : Heap as Memory (i.e. while storing in another variable it stores in the heap and 
//points to the same )

//***** Note while all the variable are stored in Stack but their actual content is stored in heap for non primitive Datatype ****

