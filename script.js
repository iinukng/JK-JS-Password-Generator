// Arrays 
var length = 8;
var outCome = [];

var numList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symList = ['!', '@', '#', '$', '%', '^', '&', '*'];
var lowList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = Prompt();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  } 
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < length; i++) {
      var random = Math.floor(Math.random() * outCome.length);
      password = password + outCome[random];
  }
  return password;
}

function Prompt() {

  length = parseInt(window.prompt("How long do you want your password to be? Pick from 8 to 128 characters."));

  if(isNaN(length) || length < 8 || length > 128) {
    window.alert("You should have 8 to 128 characters in your password!");
    return false;
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
  return true;
}

