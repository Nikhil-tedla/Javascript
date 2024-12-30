//
//10. write a javascript program to check given string is palindrome or not
let s="141";
let l=0;
let r=s.length-1;
while(l<r){
    if(s[l++]!=s[r--]){
        console.log(false);
        return;
        
    }
    
}
console.log(true);