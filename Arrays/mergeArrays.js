var roles = [
    {
        name: "Basic",
        des: "OK"
    },
    {
        name: "super",
        des: "avg"
    }
];
var info = [
    {
        name: "Basic",
        id: 1
    },
    {
        name: "guna",
        id: 2
    },
    {
        name: "super",
        id: 3
    }
];

function mergeArray(arr1, arr2) {
    var finalArray = [];
    for (var i in arr1) {
        var shared = false;
        for (var j in arr2)
            if (arr2[j].name == arr1[i].name) {
                shared = true;
                break;
            }
        if (!shared) finalArray.push({name: arr1[i].name, des: 'none'})
    }
    finalArray = finalArray.concat(arr2);

    // console.log(finalArray);
    return finalArray;
};

mergeArray(info, roles);



