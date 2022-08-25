// Assignment code here
//

var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword() {
  var length = prompt("how long do you want your password? (8-128)")
  while (true) {
    if (length === null) {
      break
    // } else if (length !== number) {
    //   length = prompt("That is not a number. Please give a length between 8-128")
    } else if (length <= 7) {
      length = prompt("That is too short. Please give a length between 8-128")
    } else if (length >= 128) {
      length = prompt("That is too long. Please give a length between 8-128")
    } else if (length >=8 && length <= 128){
      break
    }
  };
// if you cancel out of the prompt, you dont want these to continue. Make a if statment for that
  var upper = confirm("Do you want uppercase characters?");
  var lower = confirm("Do you want lowercase characters?");
  var special = confirm("Do you want special characters?");
  var num = confirm("Do you want numbers?");



  var password = "";
  for (i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
   }
   return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
