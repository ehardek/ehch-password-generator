// Assignment Code
var generateBtn = document.querySelector("#generate");

// TODO: Let Characters equal arrays 
//   - Chars equal single strings
let lowerStr = 'a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z';
let upperStr= 'A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z';
let numStr = '1-2-3-4-5-6-7-8-9-0';
let specialStr = "!-#-$-%-(-)-*-+-.-/-:-;-<-=->-?-@-[-\-]-^-`-{-|-}-~";
//   - Use split() separate Char strings 
let lowerArr = lowerStr.split('-');
let upperArr = upperStr.split('-');
let numArr = numStr.split('-');
let specialArr = specialStr.split('-');

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
