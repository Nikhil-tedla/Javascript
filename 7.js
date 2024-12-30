//7. Write a JavaScript program to print student details who got highest marks, create objects using class 
class Student{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }

}
let s1=new Student("Varsha",73);
let s2=new Student("Abdul",80);
let s3=new Student("Vicky",84);
let s4=new Student("Spandana",65);
let students=[s1,s2,s3,s4];
students.sort((x,y)=>y.marks-x.marks);

console.log(students[0]);