//18. Write a JavaScript program to print GCD of given two numbers
let a=18;
let b=4;
function gcd(x,y){
    if(x%y==0){
        return y;
    }
    return gcd(y,x%y);
}
console.log(gcd(a,b));
