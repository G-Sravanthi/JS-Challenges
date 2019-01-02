function reverseString(s) {
   
    try{
        var reverse = s.split('').reverse().join('');
        console.log(reverse);
        return reverse;
    }
    catch(e){
        console.log(e.message);
        console.log(s);
    }
}

reverseString('1234');