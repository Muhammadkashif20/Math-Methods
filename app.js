// var number=4.1
// var result=Math.round(number)
// console.log(result);


// var num=4.1
// var result=Math.ceil(num)
// console.log(result);

// var number=2
// var result=Math.floor(number)
// console.log(result);

// positive integers question 1
var number=3.45214
console.log('Number :'+number);
var result=Math.round(number)
console.log('round off value: '+result);
var result=Math.floor(number)
console.log('floor value: '+result);
var result=Math.ceil(number)
console.log('ceil value: '+result);

// Negative integers question 2

var number=-2.673
console.log('Number :'+number);
var result=Math.round(number)
console.log('round off value: '+result);
var result=Math.floor(number)
console.log('floor value: '+result);
var result=Math.ceil(number)
console.log('ceil value: '+result);

// The Absolute Value question 3

var num=-4;
console.log(num);
var result=Math.round(num)
console.log(-result);


// var randomNumber=Math.random()*255
// var result=Math.round(randomNumber)
// document.write(result+' , ')
// var randomNumber1=Math.random()*255
// var result=Math.round(randomNumber1)
// document.write(result+' , ')
// var randomNumber2=Math.random()*255
// var result=Math.round(randomNumber2)
// document.write(result)

// Random Dise Value question 4

// var randomNumber=Math.random()*4
// var result=Math.round(randomNumber)
// console.log('Random dice value: '+result);
// var randomNumber2=Math.random()*6
// var result=Math.round(randomNumber2)
// console.log('Random dice value: '+result);

// haids Tails Game question 5

var game=Math.random()*2
var result=Math.round(game)
console.log(result);

if(result==2){
    console.log(result+' random coin value: Heads');
}
else if(result==1){
    console.log(result+' random coin value: Tails');
}
else{
    console.log('Try Again');
}

// Random Number Betwwen 1 to 100 question 6

var generateNumber=Math.random()*100
var result=Math.round(generateNumber)
console.log('Random Number Between 1 and 100: '+result);

// User weight question 7
// alert(`a. 50b. 50kgsc. 50.2kgsd. 50.2kilograms`)
// var userWeights=prompt('enter your weights in kilograms')
// console.log('The Weight of user is: '+userWeights+' Kilograms');

// Secret Number Game question 8

var secretNumber=Math.random()*10
var result=Math.round(secretNumber)
console.log(result);
var userNumber=prompt('enter your number ')
if(result==userNumber){
    alert('Congratulations The user');
}
else{
    alert('Your number is wrong');

}



