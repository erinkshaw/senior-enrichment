
//seed file from stackchat below. Use when creating YOUR seed file

const db = require('./db');
var Student = require('./db/models/student')
var Campus = require('./db/models/campus');

Student.belongsTo(Campus)

var student = [
    {name: "Harry Potter", wand: "11 inch, holly, phoenix feather", campusId: 1},
    {name: "Ron Weasley", wand: "12 inch, ash, unicorn hair", campusId: 1},
    {name: "Hermione Granger", wand: "10¾ inch, vine, dragon heartstring", campusId: 1},
    {name: "Cho Chang", wand: "9½ inch, rosewood, Veela hair", campusId: 2},
    {name: "Penelope Clearwater", wand: "14 inch, willow, unicorn hair", campusId: 2},
    {name: "Cedric Diggory", wand: "12¼ inch, ash, unicorn hair", campusId: 3},
    // {name: "Draco Malfoy", wand: "10 inch, hawthorn, unicorn hair", campusId: 4},
    // {name: "Vincent Crabbe", wand: "12¾ inch, walnut, dragon heartstring", campusId: 4},
  ]


const campus = [
  {name: "Gryffindor", imgUrl: 'https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_01-5B1-5D.jpg'},
  {name: "Ravenclaw", imgUrl: 'https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_rav-200x0-c-default.jpg'},
  {name: "Hufflepuff", imgUrl: 'https://vignette3.wikia.nocookie.net/harrypotter/images/e/e4/Hufflepuff.jpg/revision/latest?cb=20110817075555'}
  // {name: "Slytherin", imgUrl: 'http://vignette1.wikia.nocookie.net/harryalbuspotter/images/4/45/Slytherin_by_melisarodriguez-d47ly0k.png/revision/latest?cb=20140621170234'}
];


const seed = () =>
  Promise.all(campus.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student)
    // .then(student.setCampus(id()))
  )
  ));

// const main = () => {
//   console.log('Syncing db...');
//   db.sync({ force: true })
//     .then(() => {
//       console.log('Seeding database...');
//       return seed();
//     })
//     .catch(err => {
//       console.log('Error while seeding');
//       console.log(err.stack);
//     })
//     .then(() => {
//       db.close();
//       return null;
//     });
// };



const main = () => {db.sync({force: true})
.then(()=> {
  return seed()
})
.catch(err => {
  console.log('Error while seeding');
  console.log(err.stack);
})
.then(() => {
  db.close();
  return null;
})}

main();
