// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.addEventListener("click", writePassword);

function writePassword() {

uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] ;
lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] ; 
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] 
special = "!@#$%^&*()_+" ;

// This variable asks the User the length of their password
  var passwordLength = parseInt (prompt ("Enter the length of your password min 8 character max 128"))
  while ( (passwordLength === "") || (passwordLength < 8 ) || (isNaN (passwordLength) ) || (passwordLength > 128 )  )  {
    alert ("Enter the length of your password min 8 character max 128")
    var passwordLength = parseInt ( prompt  ("Enter the length of your password min 8 character max 128"))
    };  
  // This tells the user how many characters are going to be in their password
  alert ("Your password length is " + passwordLength) 
    
    //prompt user to input character types
  var passwordUpper = (confirm ("Would you like to use uppercase letters?"))
   if (passwordUpper === false) {alert ("You are not using uppercase letters!")}
   else {alert ("You are using uppercase letters!")};
  var passwordLower = (confirm ("Would you like to use lowercase letters?")) 
    if (passwordLower === false) {alert ("You are not using lowercase letters!")}
    else {alert ("You are using lowercase letters!")};
  var passwordSpec = (confirm ("Would you like to use special characters?")) 
    if (passwordSpec === false ) {alert ("You are not using special characters!")}
    else {alert ("You are using special characters!")} ;
  var passwordNum = (confirm ("Would you like to use numbers?")) 
    if (passwordNum === false ) {alert ("You are not using numbers!")}
    else{alert ("You are using numbers!")} ;

  
   
 

   //  This prints the finished password
   // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}


// Add event listener to generate button





//  