// ## Array Cardio Day 2
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

console.log('people array');
console.table(people);

console.log('comments array');
console.table(comments);

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
console.log('at least one is 19 y.o.?');
const isAdult = people.some(person => ((new Date().getFullYear()) - person.year) >= 19)
console.log({isAdult})
// Array.prototype.every() // is everyone 19 or older?
console.log('all of them are 19 y.o.?');
const allAdults = people.every(person => ((new Date().getFullYear()) - person.year) >= 19)
console.log({allAdults})

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
console.log('find a comment with id 823423');
const daComment = comments.find(comment => comment.id === 823423)
console.log(daComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
console.log('remove this comment from the array');
const index = comments.findIndex(comment => comment.id === 823423)
console.log(index);

// 👇 could use this and log comments
// comments.splice(index, 1)

// 👇 or use this to create a new array
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index +1)
]

console.table(newComments)