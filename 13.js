//13.  write a javascript program to print prime numbers between 1 to 100

for(let i=2;i<=100;i++){
    let f=0;
    for(let j=2;j<=Math.sqrt(i);j++){
        if(i%j==0){
            f=1;
            break;
        }
    }
    if(f==0){
        console.log(i);
        c++;
    }
}

