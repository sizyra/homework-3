Password Generator

Work day 1:
HTML is functioning and acceptable-looking.
Functioning arrays. Function tied to button correctly calls out alerts.
Alerts not yet tied to proper input; uncertain where the disconnect lies.

Work day 2:
Restarted. HTML is far simpler (only text and button, no checkboxes).
Functioning arrays. Function tied to button correctly calls out appropriate prompts/alerts.
Arrays made for lowercase letters, uppercase letters, numbers, and special characters. Arrays named one, two, three, and four for simplicity.
Combo arrays made for every conceivable combination of the above. Arrays named based on contents (ie oneTwo include both one and two, etc).
Input now properly calls specific arrays and the correct number of items from contents.

Starts with a prompt for password length. If the length is above 128 or below 8, user gets error message and is asked to start over.
If user exits prompt without entering a length, they get error message and are asked to start over.

Followed by 4 confirms, one for each of the individual arrays. 

Based on whether the user press true or false, they receive a password including the characters they wanted and of the length they chose.

If user chooses false on all confirms, error message appears and they are asked to start over.

Uncertain error persists - at random times, there is an 'undefined' component in a generated password. Unsure what term(s) are at fault.
Error shows up in all individual arrays. Shown most clearly when generating a long password.

Work day 2 addendum:
Found uncertain error. Math.random was occasionally attempting to return item -1 from arrays. Solved.