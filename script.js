// Arrays 
var outCome = [];
var passwordLength = 8;

var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var lowList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompt();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomLetter = Math.floor(Math.random() * outCome.length);
    password = password + outCome[randomLetter];
  }
  return password;
}

function getPrompt() {
  var outCome = [];
  var passwordLength = parseInt(window.prompt("How long do you want your password to be? Pick from 8 to 128 characters."));

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("You should have 8 to 128 characters in your password!");
    return;
  }
  if (window.confirm("Do you want numbers in your list?")) {
    outCome = outCome.concat(numList);
  }
  if (window.confirm("Do you want symbols in your list?")) {
    outCome = outCome.concat(symList);
  }
  if (window.confirm("Do you want lowercase letters in your list?")) {
    outCome = outCome.concat(lowList);
  }
  if (window.confirm("Do you want uppercase letters in your list?")) {
    outCome = outCome.concat(uppList);
  }
  return;
}
