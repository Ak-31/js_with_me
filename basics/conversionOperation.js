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