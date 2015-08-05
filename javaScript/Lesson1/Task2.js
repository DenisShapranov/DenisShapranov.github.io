var name;
var requestName;
var confirmationName;//initiate variables

do {
    name = prompt('What is your name?', 'user'); //request user name
    requestName = 'Your name is ' + name + '?'; //compile confirm string
    confirmationName = confirm(requestName); //request confirmation
} while (!confirmationName); //cycle until not confirm