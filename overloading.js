class demo{
    add(...arr){
        let n=arr.length;
        let s=0;
        for(let i=0;i<n;i++){
            s+=arr[i];
        }
        console.log(s);
        
    }
}
let a=new demo();
a.add(1,2,4,5);