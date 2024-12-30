//
//9. write a javascript program to check given number is palindrome number or not
let n=143441;
let s=""+n;
let l=0;
let r=s.length-1;
while(l<r){
    if(s[l++]!=s[r--]){
        console.log(false);
        return;
        
    }
    
}
console.log(true);