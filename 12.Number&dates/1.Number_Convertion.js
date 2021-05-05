//convert string to number
console.log('12')
console.log(typeof '12')

console.log(+'12')
console.log(typeof +'12')

console.log(Number('12'))
console.log(typeof Number('12'))

console.log(parseInt('12'))
console.log(typeof parseInt('12'))
console.log(parseFloat('12'))
console.log(typeof(parseFloat('12')))

console.log(parseInt('12.12'))
console.log(typeof parseInt('12.12'))
console.log(parseFloat('12.12'))
console.log(typeof(parseFloat('12.12')))

console.log(parseInt('12.12px'))
console.log(typeof parseInt('12'))
console.log(parseFloat('12.12px'))
console.log(typeof(parseFloat('12')))

console.log(parseInt('  12.12px  '))
console.log(typeof parseInt('12'))
console.log(parseFloat('  12.12px  '))
console.log(typeof(parseFloat('12')))


//check number or not
console.log(isNaN('12'))
console.log(isNaN(12))
console.log(isNaN('12.2'))
console.log(isNaN('12px'))//true

console.log(12/0)//Infinity
console.log(isFinite(12/0))//false
console.log(isFinite(12/2))//true
console.log("12"/0)//Infinity
console.log(Number.isFinite("12"/0))//false
console.log(isFinite("12"/2))//true

console.log(Number.isInteger("12"))//false
console.log(Number.isInteger("12.12"))//false
console.log(Number.isInteger(12))//true
console.log(Number.isInteger(12.12))//false
console.log(Number.isSafeInteger(12))//true
console.log(Number.isSafeInteger("12"))//false

