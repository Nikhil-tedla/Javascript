//17. write a javascript program to count number of vowels in a string 
let s="alphabetsou";
let ref="aeiou";
let c=0;
for(let i=0;i<s.length;i++){
    if(ref.indexOf(s[i])!=-1){
        c+=1;
    }
}
console.log(c);
