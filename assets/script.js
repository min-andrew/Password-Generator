// Assignment code here
// 
 const random = (length = 8) => {

  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var password = "";
  for (i = 0; i < length; i++) {
   password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};
console.log(random());


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
