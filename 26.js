//26. Write JavaScript program to create new array of leap years from given array
let arr=[2000,2024,2025];
let newarr=arr.filter((e)=>((e%4==0 && e%100!=0)||e%400==0));
console.log(newarr);
