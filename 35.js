// 35. Write a function that takes an object and a list of keys, and returns a new object that only contains the properties from the list of keys.

// const obj = { a: 1, b: 2, c: 3, d: 4 };
// const keys = ['b', 'c'];


// output : { b: 2, c: 3 }
const obj = { a: 1, b: 2, c: 3, d: 4 };
const keys = ['b', 'c'];
function helper(obj,keys){
    let o1=new Object();
    for( let a of keys){
        for(let b in obj){
            if(a==b){
                o1[a]=obj[b];
                
                break;
            }
        }
    }
    return o1;
}
let abc=helper(obj,keys);
console.log(abc);
