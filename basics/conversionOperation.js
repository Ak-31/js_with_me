//Converting the datatype in js is important as of to work on the correct datatype 

let vvar = "456a"
let rar = null

console.table([typeof vvar, vvar]) // This is used to determine the type of the variable 

console.table([typeof rar, rar])

console.log("After Updation")


// To convert the particular datatype to another require conversion

let newvar = Number(vvar)
let newrar = Number(rar)

console.table([typeof newvar, newvar]) // Describes the type as the number while in actual reality it is NaN (Not a Number)


console.table([typeof newrar, newrar])


/* Crux of these conversion

"45" => 45 {String to Number}
"45a" => NaN (This too is a part of number) {String to Number}
true => 1 ; false => 0 {Boolean to Number}
1=> true ; 0 => false {Number to Boolean}
"" => false ; "anytext" => true {String to Boolean}
null => 0 " ; null => "null" ; null=> false {null to Number; String; Boolean }

*/

// ******Operations******

console.table([2+2 , "2"+2, 2+"2", "1"+2+2, 1+"2"+2, 1+2+"2"])

console.table([+true , true , +""])

//Operators Precedences 
a = b = 5; // same as writing a = (b = 5);

// **, * , / , %,  +, - , +(Concatination)

let thisis = +"" //This had type converted to Number
console.log(typeof thisis)

// ******Comparison******

console.log("1"> "1"); // This converts the string to number and then checks and thats where the ambiquity comes into picture 
//What if 

console.table(["2" > 1, "1"> 2])

//Here comes the interesting conversion
console.table([null>0, null==0 , null===0 , null>=0])
console.table([undefined>0, undefined==0 , undefined===0 , undefined>=0])

