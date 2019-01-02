var roles = [
    {
        name: "Sai",
        des: "CounterStrike"
    },
    {
        name: "Sunil",
        des: "PUBG"
    }
];
var person = [
    {
        name: "Chandu",
        id: 1
    },
    {
        name: "Sai",
        id: 2
    },
    {
        name: "Sunil",
        id: 3
    }
];

function combine(arr1, arr2) {
    let finalArray = [];
    let duplicateIds = [];
    var results = [];

    for (let i in arr1) {
        for (let j in arr2) {
            if (arr1[i].name === arr2[j].name) {
                finalArray.push({ name: arr1[i].name, id: arr1[i].id, des: arr2[j].des });
            }else{
                duplicateIds.push(arr1[i].id);
            }
        }
    }

    // arr1.map(personObj => {
    //     finalArray.map(newObj => {
    //         if (personObj.id !== newObj.id) {
    //             duplicateIds.push(personObj.id);
    //         }
    //     });
    // })

    //find the repeated ID.
    var sorted_arr = duplicateIds.slice().sort();
    for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }

    for(let i in arr1){
        if(results[i] === arr1[i].id){
            finalArray.push({ name: arr1[i].name, id: arr1[i].id, des: 'none' });
        }
    }

    console.log(finalArray);
    return finalArray;
}

combine(person, roles);