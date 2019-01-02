function regexVar(inputString){

    var re = /^([aeiou]).*\1$/;

    re.test(inputString);

    console.log(re.test(inputString));
    return re;
}

regexVar('abcdoa');