//3. Write a JavaScript program to print sum of even numbers from given array
let arr=[2,4,1,7,11];
let s=0;
for(let i of arr){
    if(i%2==0)s+=i;
}
console.log(s);
