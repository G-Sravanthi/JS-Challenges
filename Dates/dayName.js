// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 
                    'Wednesday', 'Thursday', 'Friday', 
                    'Saturday'];
    let getDay = new Date(Date.parse(dateString)).getUTCDay();
    dayName = dayNames[getDay];
    
    // console.log(dayName);
    return dayName;
}

// inputFormat: MM/DD/YYYY;
getDayName("10/11/2009");
getDayName("12/31/2018");
getDayName("01/01/2019");
