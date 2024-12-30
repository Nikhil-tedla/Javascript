//28. write a javascript program to store factorials of each number into new array from given array
let arr=[3,5,4,1];
var newarr=arr.map((e)=>helper(e));
console.log(newarr);
function helper(e){
    let s=1;
    for(let i=2;i<=e;i++){
        s*=i;
    }
    return s;
}