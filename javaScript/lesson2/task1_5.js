//Task1
var year;
var yearInt; //initiate variables
    year = prompt('Какой сейчас год?', ''); //request year
    yearInt = parseInt(year);
if (yearInt == 2015) //check year
{
    alert("Вы правы!");//check=true
}   else
{
    alert ("С луны свалися? 2015!");//check=false
}

//Task2
var wholeNumber, numberAlert;
wholeNumber = parseInt(prompt('Введите любое целое число', '')); //request number
if (wholeNumber > 0) //check number
{
    numberAlert = 1;
}   else
{
    if (wholeNumber < 0) //check number
    {
        numberAlert = -1;
    }   else
    {
        numberAlert = 0;
    }
}
alert(numberAlert);

//Task3
var login, password;
    login = prompt('Введите логин пользователя', '');
if(login == 'admin') //check login
{
    password = prompt('Введите пароль', '');
    if (password == 'passw0rd') //check password
    {
        alert ('Welcome home!');
    } else
    {
        if (password == null || password =='') //check password
        {
            alert ('Canceled');
        } else
        {
            alert ('Wrong password');
        }
    }
} else
{
    if (login == null || login =='') //check login
    {
        alert ('Canceled');
    } else
    {
        alert('Access denied');
    }
}

//Task4
var a = 1, b = 2;
var result;
result = (a + b >= 3) ? 'Yep!' : 'Noup!';
alert (result);

//Task5
var name = 'admin', text;
text = (name == 'admin') ? 'Hi' : (name == 'manager') ? 'Hello' : (name == '') ? 'No login' : '';

alert (text);