// get the user's string
function getValue() {
  // hides the Results alert
  document.getElementById("alert").classList.add("invisible");
  document.getElementById("alertFail").classList.add("invisible");

  // get the user input
  let userStr = document.getElementById("strValue").value;

  // test if string is empty
  if (userStr == "") {
    Swal.fire({
      icon: "error",
      backdrop: false,
      title: "Error...",
      text: "Must enter a string",
    });
  }

  // check for spaces, punctuations, capitals, special character
  const regex = /[^a-z0-9]/gi;
  userStr = userStr.replace(regex, ""); // apply regex to user string

  let reversedStr = reverseStr(userStr);

  let isPalindrome = palindromeChecker(userStr, reversedStr);

  // display the reversed user input
  displayResult(reversedStr, isPalindrome);
}

// reverse the string
function reverseStr(userStr) {

  let revStr = [];

  for (let i = userStr.length - 1; i >= 0; i--) {
    // loop from string length - 1 down to 0
    revStr += userStr[i]; // add element in userStr to revStr
  }
  return revStr;
}

// checks if string is a palindrome
function palindromeChecker(userStr, reversedStr) {

    let isPalindrome = false;

    // check for palindrome
    if (reversedStr.toLowerCase() === userStr.toLowerCase()) {
      isPalindrome = true;
    }
    return isPalindrome;
}

// display string
function displayResult(reversedStr, isPalindrome) {

  if (isPalindrome) {
    document.getElementById("msg").innerHTML = `Your string reversed is: <strong> ${reversedStr}</strong>`;
    document.getElementById("alert").classList.remove("invisible");
  } else {
    document.getElementById("msgFail").innerHTML = `Your string reversed is: <strong> ${reversedStr}</strong>`;
    document.getElementById("alertFail").classList.remove("invisible");
  }
}

