//20. write a javascript program to second smallest number from given array
let arr=[2,4,2,5,3,3,3];
let min=arr[0];
let p=9999999999;
for(let i=1;i<arr.length;i++){
    if(min>arr[i]){
        p=min;
        min=arr[i];
        
    }
    else if(arr[i]<p && arr[i]>min){
        p=arr[i];
    }
}
console.log(p);
