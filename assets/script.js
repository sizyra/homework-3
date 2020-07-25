// Array of lower-case letters
var one = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of upper-case letters
var two = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Array of numbers
var three = ['1','2','3','4','5','6','7','8','9','0']

// Array of special characters
var four = ['!','(',')','-','.','?','[',']','_','`','~',';',':','!','@','#','$','%','^','&','*','+','='];

// Array including only letters
var oneTwo = one.concat(two);

// Array including only lowercase and numbers
var oneThree = one.concat(three);

// Array including only lowercase and special characters
var oneFour = one.concat(four);

// Array including only uppercase and numbers
var twoThree = two.concat(three);

// Array including only uppercase and special characters
var twoFour = two.concat(four);

// Array including only numbers and special characters
var threeFour = three.concat(four);

// Array including all characters except for uppercase letters
var oneThreeFour = one.concat(three, four);

// Array including all characters except for lowercase letters
var twoThreeFour = two.concat(three, four);

// Array inluding all characters except for special characters
var oneTwoThree = one.concat(two, three);

//Array including all characters except for numbers
var oneTwoFour = one.concat(two, four);

// Array including all possible characters
var allYes = one.concat(two, three, four);

// Creates var for the button
var generate = document.querySelector('#button');

// Activates when the user presses the button:
function buttonpress() {
    // Asks the user to enter a number between 8 and 128 for password length:
    var askLength = prompt('Choose a number between 8 and 128 to determine your password length.');
    
    // Turns the user's entry from a string to a number:
    var lengthNum = parseInt(askLength);
    
    if (askLength === null) {
        alert('You must choose a length. Press the button again to start over.');
    }

    //If the user chose a number below 8 or above 128:
    else if(lengthNum < 8 || lengthNum > 128) {
        alert('Invalid selection. Press the button again to start over.');
    } 
    
    // If the user entered a valid response, the other prompts follow:
    else {
        var askLet = confirm('Do you want lowercase letters in your password? OK for yes, Cancel for no.');
        
        var askCase = confirm('Do you want uppercase letters in your password? OK for yes, Cancel for only lowercase.');

        var askNum = confirm('Do you want numbers in your password? OK for yes, Cancel for no.');

        var askSpec = confirm('Do you want special characters in your password? OK for yes, Cancel for no.');
    }

    if(askLet && askCase && askNum && askSpec) {
        // If the user chooses to use all available characters:
        var allYesAlert = '';

        for (var i = 0; i < lengthNum; i++) {
            allYesAlert += allYes[Math.floor(Math.random() * (allYes.length -1))];
        }

        alert(allYesAlert);
    } else if(askLet && askCase && askNum && !askSpec) {
        // If the user chooses everything but special characters:
        var alertOneTwoThree = '';

        for (var i = 0; i < lengthNum; i++) {
            alertOneTwoThree += oneTwoThree[Math.floor(Math.random() * (oneTwoThree.length -1))];
        }

        alert(alertOneTwoThree);
    } else if(askLet && askCase && !askNum && askSpec) {
        // If the user chooses everything but numbers:
        var alertOneTwoFour = '';

        for (var i = 0; i < lengthNum; i++) {
            alertOneTwoFour += oneTwoFour[Math.floor(Math.random() * (oneTwoFour.length -1))];
        }

        alert(alertOneTwoFour);
    } else if(askLet && !askCase && askNum && askSpec) {
        // If the user chooses everything but uppercase letters:
        var alertOneThreeFour = '';

        for (var i = 0; i < lengthNum; i++) {
            alertOneThreeFour += oneThreeFour[Math.floor(Math.random() * (oneThreeFour.length -1))];
        }

        alert(alertOneThreeFour);
    } else if(!askLet && askCase && askNum && askSpec) {
        // If the user chooses everything but lowercase letters:
        var alertTwoThreeFour = '';

        for (var i = 0; i < lengthNum; i++) {
            alertTwoThreeFour += twoThreeFour[Math.floor(Math.random() * (twoThreeFour.length -1))];
        }

        alert(alertTwoThreeFour);
    } else if(askLet && askCase && !askNum && !askSpec) {
        // If the user chooses only lowercase and uppercase letters:
        var alertOneTwo = '';

        for (var i = 0; i < lengthNum; i++) {
            alertOneTwo += oneTwo[Math.floor(Math.random() * (oneTwo.length -1))];
        }

        alert(alertOneTwo);
    } else if(askLet && !askCase && askNum && !askSpec) {
        // If the user chooses only lowercase letters and numbers:
        var alertOneThree = '';

        for (var i = 0; i < lengthNum; i++) {
            alertOneThree += oneThree[Math.floor(Math.random() * (oneThree.length -1))];
        }

        alert(alertOneThree);
    } else if(askLet && !askCase && !askNum && askSpec) {
        // If the user chooses only lowercase letters and special characters:
        var alertOneFour = '';

        for (var i = 0; i < lengthNum; i++) {
            alertOneFour += oneFour[Math.floor(Math.random() * (oneFour.length -1))];
        }

        alert(alertOneFour);
    } else if(!askLet && askCase && askNum && !askSpec) {
        // If the user chooses only uppercase letters and numbers:
        var alertTwoThree = '';

        for (var i = 0; i < lengthNum; i++) {
            alertTwoThree += twoThree[Math.floor(Math.random() * (twoThree.length -1))];
        }

        alert(alertTwoThree);
    } else if(!askLet && askCase && !askNum && askSpec) {
        // If the user chooses only uppercase letters and special characters:
        var alertTwoFour = '';

        for (var i = 0; i < lengthNum; i++) {
            alertTwoFour += twoFour[Math.floor(Math.random() * (twoFour.length -1))];
        }

        alert(alertTwoFour);
    } else if(!askLet && !askCase && askNum && askSpec) {
        // If the user chooses only numbers and special characters:
        var alertThreeFour = '';

        for (var i = 0; i < lengthNum; i++) {
            alertThreeFour += threeFour[Math.floor(Math.random() * (threeFour.length -1))];
        }

        alert(alertThreeFour);
    } else if(askLet && !askCase && !askNum && !askSpec) {
        // If the user chooses only lowercase letters:
        var alertOne = '';

        for (var i = 0; i < lengthNum; i++) {
            alertOne += one[Math.floor(Math.random() * (one.length -1))];
        }

        alert(alertOne);
    } else if(!askLet&& askCase && !askNum && !askSpec) {
        // If the user chooses only uppercase letters:
        var alertTwo = '';

        for (var i = 0; i < lengthNum; i++) {
            alertTwo += two[Math.floor(Math.random() * (two.length -1))];
        }

        alert(alertTwo);
    } else if(!askLet && !askCase && askNum && !askSpec) {
        // If the user chooses only numbers:
        var alertThree = '';

        for (var i = 0; i < lengthNum; i++) {
            alertThree += three[Math.floor(Math.random() * (three.length -1))];
        }

        alert(alertThree);
    } else if(!askLet && !askCase && !askNum && askSpec) {
        // If the user chooses only special characters:
        var alertFour = '';

        for (var i = 0; i < lengthNum; i++) {
            alertFour += four[Math.floor(Math.random() * (four.length -1))];
        }

        alert(alertFour);
    } else if(!askLet && !askCase && !askNum && !askSpec) {
        alert('You must choose at least one character type. Press the button again to start over.');
    }
}