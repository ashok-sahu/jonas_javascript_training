console.log(Math.SQRT2); //1.4142135623730951
console.log(Math.sqrt(2)); //1.4142135623730951

//square root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); //64=8*8

//cube root
console.log(Math.round(64 ** (1 / 3))); //4
console.log(64 ** (1 / 3)); //3.9999999999999996

//absolute value
console.log(Math.abs(-2)); //2
console.log(Math.abs(+2)); //2

//rounded number(round figure)
console.log(Math.round(2.4)); //2
console.log(Math.round(2.5)); //3
console.log(Math.round(2.9)); //3

console.log(10 / 3);
console.log(Math.trunc(10 / 3)); //3
console.log(Math.floor(10 / 3)); //3
console.log(~(10 / 3)); //-4
console.log(Math.abs(~(10 / 3))); //4

console.log(Math.ceil(23.9))
console.log(Math.ceil(23.3))
console.log(Math.ceil('23.9'))
console.log(Math.ceil('23.3'))
console.log(Math.ceil(-23.9))
console.log(Math.ceil(-23.3))

console.log(Math.floor(23.9))
console.log(Math.floor(23.3))
console.log(Math.floor('23.9'))
console.log(Math.floor('23.3'))
console.log(Math.floor(-23.9))
console.log(Math.floor(-23.3))

console.log(Math.round(23.3))
console.log(Math.round(23.9))
console.log(Math.round('23.9'))
console.log(Math.round('23.3'))
console.log(Math.round(-23.9))
console.log(Math.round(-23.3))

console.log(Math.trunc(23.9))
console.log(Math.trunc(23.3))
console.log(Math.trunc('23.9'))
console.log(Math.trunc('23.3'))
console.log(Math.trunc(-23.9))
console.log(Math.trunc(-23.3))

//convert decimal into integer [using Math functions]
let dec = 12.121;
console.log([
  Math.round(dec),
  Math.ceil(dec),
  Math.trunc(dec),
  Math.floor(dec),
]); //12, 13, 12, 12

//convert decimal into integer [using Bitwise operators]
console.log([~~dec, dec | 0, dec << 0, dec >> 0, dec >>> 0]); //12, 12, 12, 12, 12

//fixed decimals
console.log((10/3))//3.3333333333333335
console.log(+(10/3).toFixed(2))//3.33

//finding radius of circle
console.log(Math.PI)//3.141592653589793
//circumference of a circle
console.log(Math.round(2*(+(Math.PI*parseFloat('28px')))))
//area of a circle
console.log(Math.round(+(Math.PI*((parseFloat('10px'))**2))))
//random number
console.log(Math.random())//0-1
console.log(Math.floor(Math.random()*6))//1-5
console.log(Math.floor(Math.random()*6)+1)//1-6
const generaterandomNumber = ((max,min)=>Math.floor(Math.random()*(max-min)+1)+min)
console.log(generaterandomNumber(10,4))

//Max and Min numbers
console.log(Math.max(1,2,3,4,5))
console.log(Math.min(1,2,3,4,5))
console.log(Math.max(1,2,3,4,5,'10px'))//NaN
console.log(Math.min(1,2,3,4,5,'10px'))//NaN

