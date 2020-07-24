// abc = numbers, lower-case letters
var abc = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// abcCaps = numbers, lower- and upper-case letters
var abcCaps = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// special = numbers, lower-case letters, special characters
var special = ['!','@','#','$','%','^','&','*','?','~','+','=','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// specialCaps = numbers, lower- and upper-case letters, special characters
var specialCaps = ['!','@','#','$','%','^','&','*','?','~','+','=','1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

// Function checks length first, then other selections, 
function choices() {
    var twoFour = document.getElementById('24');
    var threeTwo = document.getElementById('32');
    var casesPick = document.getElementById('case');
    var specPick = document.getElementById('spec');

    if (twoFour.checked) {
        if (casesPick && specPick) {
            for (var i = 0; i < 24; i++) {
                var allOpsTwoFour = specialCaps[Math.floor(Math.random() * specialCaps.length)];
                alert(allOpsTwoFour);
            }
        } else if (casesPick === false && specPick === true) {
            for (var i = 0; i < 24; i++) {
                var specNoCapsTwoFour = special[Math.floor(Math.random() * special.length)];
                alert(specNoCapsTwoFour);
            }
        } else if (casesPick === true && specPick === false) {
            for (var i = 0; i < 24; i++) {
                var capsNoSpecTwoFour = abcCaps[Math.floor(Math.random() * abcCaps.length)];
                alert(capsNoSpecTwoFour);
            }
        } else {
            for (var i = 0; i < 24; i++) {
                var noCapsOrSpecTwoFour = abc[Math.floor(Math.random() * abc.length)];
                alert(noCapsOrSpecTwoFour);
            }
        }
    } else if (threeTwo.checked) {
        if (casesPick && specPick) {
            for (var i = 0; i < 32; i++) {
                var allOpsThreeTwo = specialCaps[Math.floor(Math.random() * specialCaps.length)];
                alert(allOpsThreeTwo);
            }
        } else if (casesPick === false && specPick === true) {
            for (var i = 0; i < 32; i++) {
                var specNoCapsThreeTwo = special[Math.floor(Math.random() * special.length)];
                alert(specNoCapsThreeTwo);
            }
        } else if (casesPick === true && specPick === false) {
            for (var i = 0; i < 32; i++) {
                var capsNoSpecThreeTwo = abcCaps[Math.floor(Math.random() * abcCaps.length)];
                alert(capsNoSpecThreeTwo);
            }
        } else {
            for (var i = 0; i < 32; i++) {
                var noCapsOrSpecThreeTwo = abc[Math.floor(Math.random() * abc.length)];
                alert(noCapsOrSpecThreeTwo);
            }
        }
    } else {
        if (casesPick && specPick) {
            for (var i = 0; i < 12; i++) {
                var allOpsOneTwo = specialCaps[Math.floor(Math.random() * specialCaps.length)];
                alert(allOpsOneTwo);
            }
        } else if (casesPick === false && specPick === true) {
            for (var i = 0; i < 12; i++) {
                var specNoCapsOneTwo = special[Math.floor(Math.random() * special.length)];
                alert(specNoCapsOneTwo);
            }
        } else if (casesPick === true && specPick === false) {
            for (var i = 0; i < 12; i++) {
                var capsNoSpecOneTwo = abcCaps[Math.floor(Math.random() * abcCaps.length)];
                alert(capsNoSpecOneTwo);
            }
        } else {
            for (var i = 0; i < 12; i++) {
                var noCapsOrSpecOneTwo = abc[Math.floor(Math.random() * abc.length)];
                alert(noCapsOrSpecOneTwo);
            }
        }
    }

}