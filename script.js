// Assignment Code
var generateBtn = document.querySelector("#generate");

// TODO: Let Characters equal arrays 
//   - Chars equal single strings
let lowerStr = "a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z";
let upperStr= "A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z";
let numStr = "1-2-3-4-5-6-7-8-9-0";
let specialStr = "!-#-$-%-(-)-*-+-.-/-:-;-<-=->-?-@-[-\-]-^-`-{-|-}-~";

//   - Use split() separate Char strings 
let lowerArr = lowerStr.split('-');
let upperArr = upperStr.split('-');
let numArr = numStr.split('-');
let specialArr = specialStr.split('-');

// TODO: Take User's Chosen Characters and Password Length 
function userChooses() {
//  - Use Prompt() for User For Password Length
let passwordLength = parseInt(prompt("Enter how many character you want in your password!"))

//  - Prompt won't take a string - Password Length must be 8 - 128 - Password Length must be a number 
while(passwordLength === " " || passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
  alert("Your password must be 8 - 128 Characters!")
  let passwordLength = parseInt(prompt("Enter how many character you want in your password!"))
}
alert("Your Password length is " + passwordLength+ "!")

//   - Use Confirm() as boolean for other Chars
//     - We must let the Chars boolean from confirm()
//   - Return function as User's Chosen Characters
}

// TODO: Write Generate Password Function
//   - Take Chosen variables and set them in to an array for iteration
//    - Use Switch Statement to process Char prompt and Confirm
//   - Randomize the index of iteration (Could be separate function)
//   - Combine Chosen Char Arrays using switch case
//   - Select at least one of each chosen Character Array 
//   - Use split() separate Char strings 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
