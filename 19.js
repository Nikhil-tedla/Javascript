//19. write a javascript program to check given number is armstrong number or not
//Armstrong number is a number that is equal to the sum of cubes of its digits. 
// For example 0, 1, 153, 370, 371 and 407 are the Armstrong numbers. 
let n=407;
let k=407;
let c=0;
while(k>=1){
    let t=k%10;
    c+=t**3;
    k=Math.floor(k/10);
    //console.log(c);
    
}
console.log(c==n);

