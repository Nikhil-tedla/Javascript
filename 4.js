//4. Write a JavaScript program to count number of duplicates elements of an array
let arr=[2,4,2,5,3,3,3];
let newarr=[];
let c=0;
for(let i of arr){
    if(newarr.indexOf(i)==-1){
        newarr.push(i);
    }
    else{
        c++;
    }

}


console.log(c);