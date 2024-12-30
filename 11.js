//11. Write a JavaScript program to remove duplicate elements from an array.
let arr=[2,4,2,5,3,3,3];
let i=0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j]  && i!=j){
            arr.splice(j,1);
        }
    }
}
console.log(arr);
