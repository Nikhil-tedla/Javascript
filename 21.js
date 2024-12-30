//21. Write a JavaScript program to print N digits in fibonacci series 

let p1=0;
let p2=1;
let n=0;
if(n==1)console.log(0);
if(n>1){
    console.log(0);
    console.log(1);
    
}
for(let i=2;i<n;i++){
    let t=p1+p2;
    console.log(t);
    p1=p2;
    p2=t;
    

}
