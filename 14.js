//14. Write a JavaScript program to find the second largest element in an array.
let arr=[2,4,2,5,3,3,3];
let l=arr[0];
let p=-1;
for(let j of arr){
    if(j>l){
        p=l;
        l=j;
    }
    else if(j>p && j<l){
        p=j;
    }
}
console.log(p);
