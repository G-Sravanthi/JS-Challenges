function timeConvesion(input) {
    var amPm = input.substring(input.length - 2)
    if (amPm == 'PM') {
        if (input.substring(0, 2) == "12") {
            input = input.substring(0, input.length - 2);
        }
        else {
            if (input.substring(0, 2))
                input = input.replace(input.substring(0, 2), parseInt(input.substring(0, 2)) + 12);
            input = input.substring(0, input.length - 2);
        }
        console.log(input);
        return input;

    } else {
        if (input.substring(0, 2) == "12")
            input = input.replace(input.substring(0, 2), '00');
        input = input.substring(0, input.length - 2);
        console.log(input);
        return input;
    }

}


timeConvesion("01:10:45PM");