
// 32. Given an array of objects representing books, use the findIndex method to find the index of the book with a specific title given by the user.

const books = [
  { title: 'Book A', author: 'Author 1' },
  { title: 'Book B', author: 'Author 2' },
  { title: 'Book C', author: 'Author 3' },
];
let t='Book D';
console.log(books.findIndex((e)=>e.title==t));