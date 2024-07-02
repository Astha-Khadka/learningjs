//ES6

const arr1 = [[1,2,3,4],[6,7,8,9]]
for(i of arr1){
    for(j of i){
        console.log("each arr1:",j)
    }
    //console.log("each arr1:",i)
}

for(i in arr1){
    console.log("each arr1:",i)
}


//nested arrray laii single ma convert garne vaneko flatten