var generateBtn = document.querySelector("#generate");
var length = "";
var legalArray = "";
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

function getPasswordLength() {
  length = parseInt(prompt("How many characters do you want your password?"));

  while (length === "" || length === null) {
    length = parse(prompt("How many characters do you want your password?"));
  }
  if (length < 8 || length > 128) {
    alert("You need more than 8 characters and less than 128!");
    getPasswordLength();
  }
  console.log("Password is " + length + " characters.")
  return (length);
};

  function getLegal() {
    if (confirm("Do you want lower case characters?")) {
      legalArray = legalArray.concat(lower);
    }
    if (confirm("Do you want upper case characters?")) {
      legalArray = legalArray.concat(upper);
    }
    if (confirm("Do you want numbers?")) {
      legalArray = legalArray.concat(numbers);
    }
    if (confirm("Do you want special characters?")) {
      legalArray = legalArray.concat(special);
    }
    return true;
  }

  
  // Write password to the #password input
  function writePassword() {


    var password = generatePassword();
    //empty function, for variable password. Need to add function after
    var passwordText = document.querySelector("#password");
    //"document." is gonna be manipulating HTML in some way
    //passwordText variable is always going to equal the input of the textbox
    passwordText.value = password;
    //Giving new attribute to the text area, and that attribute is what the function generates
    //"'element'." is going to change or add attributes
  
    };

  // Add event listener to generate button
  generateBtn.addEventListener("click", getPrompts);