// Assignment code here
//
// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var specialChar = "!@#$%^&*()";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var totalChars = "";

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
  while (length !== null) {
    var upper = confirm("Do you want uppercase characters?");
    var lower = confirm("Do you want lowercase characters?");
    var special = confirm("Do you want special characters?");
    var num = confirm("Do you want numbers?");

  // if true add to the addition of the total chars. if false, than take it out. 
    if (upper === true){
      if (lower === true){
        if (special === true){
          if (num === true){
            totalChars = upperChar + lowerChar + specialChar + numChar;
            break;
          } else if (num === false){
            totalChars = upperChar + lowerChar + specialChar;
            break;
          }
        } else if (special === false) {
          if (num === true){
            totalChars = upperChar + lowerChar + numChar;
            break;
          } else if (num === false){
            totalChars = upperChar + lowerChar;
            break;
          }
        }
      } else if (lower === false){
        if (special === true){
          if (num === true){
            totalChars = upperChar + specialChar + numChar;
            break;
          } else if (num === false){
            totalChars = upperChar + specialChar;
            break;
          }
        } else if (special === false) {
          if (num === true){
            totalChars = upperChar + numChar;
            break;
          } else if (num === false){
            totalChars = upperChar;
            break;
          }
        }
      }
    } else if (upper === false){
      if (lower === true){
        if (special === true){
          if (num === true){
            totalChars = lowerChar + specialChar + numChar;
            break;
          } else if (num === false){
            totalChars = lowerChar + specialChar;
            break;
          }
        } else if (special === false) {
          if (num === true){
            totalChars = lowerChar + numChar;
            break;
          } else if (num === false){
            totalChars = lowerChar;
            break;
          }
        }
      } else if (lower === false){
        if (special === true){
          if (num === true){
            totalChars = specialChar + numChar;
            break;
          } else if (num === false){
            totalChars = specialChar;
            break;
          }
        } else if (special === false) {
          if (num === true){
            totalChars = numChar;
            break;
          } else if (num === false){
            alert("You need to select at least one element to include in your password.");
            generatePassword();
          }
        }
      }
    }
  }

  var password = "";
  for (i = 0; i < length; i++) {
    password += totalChars.charAt(Math.floor(Math.random() * totalChars.length));
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
