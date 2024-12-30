//15. write a javascript program to check given number is strong number or not
//A number is said to be a Strong number, if the sum of factorials of the input number’s 
// every digit is equal to the same input number.
function helper(e){
    let s=1;
    for(let i=2;i<=e;i++){
        s*=i;
    }
    return s;
}
let n=145;
let k=n;

let c=0;
while(n>=1){
    let t=n%10;
    
    c+=helper(t);
    n=n/10;
}
console.log(c==k);
