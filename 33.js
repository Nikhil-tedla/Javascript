// 33.  Given an array of employee objects, each with name and salary properties, print the names of employees in ascending order who earn more than a specified amount given by the user.

// const employees = [
//   { name: 'Alice', salary: 50000 },
//   { name: 'Bob', salary: 60000 },
//   { name: 'Charlie', salary: 40000 },
// ];
const employees = [
  { name: 'Alice', salary: 50000 },
  { name: 'Bob', salary: 60000 },
  { name: 'Charlie', salary: 40000 },
];

for(let a of employees){
    if(a.salary>=50000){
        console.log(a.name);
    }
}