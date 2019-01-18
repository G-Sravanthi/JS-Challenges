function regexVar(inputString){

    var re = /^([aeiou]).*\1$/;

    re.test(inputString);

    console.log(re.test(inputString));
    return re;
}

regexVar('abcdoa');

var phoneNumber = /^[0-9] {3} - [0-9] {3} - [0-9] {4} $/ ;
var socialNumber = /^[0-9] {3} - [0-9] {2} - [0-9] {4} $/ ;