
var message= prompt ("Enter First Number");
var sign = prompt("+, -, *, /, %");
var userMSG= prompt("Enter Second Number");

if (sign=== "+") {
  alert( add())
} else if (sign === "-"){
  alert(substract ())
} else if (sign === "*"){
  alert( multiply ())
} else if (sign === "/"){
  alert (divide ())
}else if (sign === "%"){
  alert(percentage ())
};
  
function add() {
  return +message+ +userMSG
}
function substract(){
  return message - userMSG
}
function multiply () {
  return message * userMSG
}
function divide () {
  return message / userMSG
}
function percentage () {
  return message * userMSG/100
}