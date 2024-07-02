function sumNum(num1,num2){
    return num1 + num2;
}

console.log(sumNum(10,20));

const array = ["a","b","c","d","e","f",5,6,7,8,9]

for(let i = 0;i<10;i++){
    console.log(i)
}

for(i of array){
    console.log(i);
}

for(i in array){
    console.log(i);
}

console.log(array[5])

for(j of array.toString()){
    console.log(typeof j);
}



