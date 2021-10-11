// Assignment Code
var generateBtn = document.querySelector("#generate");

// TODO: Let Characters equal arrays 
//   - Chars equal single strings in 4 arrays
//   - Use split() separate Char strings 

// TODO: Take User's Chosen Characters and Password Length 
//   - Use Prompt() for User For Password Length
//     - Password Length must be 8 - 128
//     - Password Length must be A number 
//   - Use Confirm() as boolean for other Chars
//     - We must let the Chars boolean from confirm()
//   - Return function as User's Chosen Characters

// TODO: Write Generate Password Function
//   - Take Chosen variables and set them in to an array for iteration
//    - Use Switch Statement to process Char prompt and Confirm
//   - Randomize the index of iteration (Could be separate function)
//   - Combine Chosen Char Arrays using switch case
//   - Select at least one of each chosen Character Array 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
