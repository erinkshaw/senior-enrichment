
//seed file from stackchat below. Use when creating YOUR seed file

const db = require('./db');
var Student = require('./db/models').Student;
var Campus = require('./db/models').Campus;

Student.belongsTo(Campus)

const students = [
  {name: "Erin"},
  {name: "Kimberly"},
  {name: "Gabby"},
  {name: "Jennifer" },
  {name: "Michelle"},
  {name: "Emily"},
  {name: "Erika"},
  {name: "Mieka"},
]

const campus = [
  {name: "Gryffindor", imgUrl: 'https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_01-5B1-5D.jpg'},
  {name: "Ravenclaw", imgUrl: 'https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_rav-200x0-c-default.jpg'},
  {name: "Hufflepuff", imgUrl: 'https://vignette3.wikia.nocookie.net/harrypotter/images/e/e4/Hufflepuff.jpg/revision/latest?cb=20110817075555'},
  {name: "Slytherin", imgUrl: 'http://vignette1.wikia.nocookie.net/harryalbuspotter/images/4/45/Slytherin_by_melisarodriguez-d47ly0k.png/revision/latest?cb=20140621170234'}
];

const id = () => Math.round(Math.random() * (campus.length - 1)) + 1;

// const messages = [
//   { authorId: id(), content: 'I like React!', channelId: 1 },
//   { authorId: id(), content: 'I like Redux!', channelId: 1 },
//   { authorId: id(), content: 'I like React-Redux!', channelId: 1 },
//   { authorId: id(), content: 'I like writing web apps!', channelId: 2 },
//   { authorId: id(), content: 'You should learn JavaScript!', channelId: 2 },
//   { authorId: id(), content: 'JavaScript is pretty great!', channelId: 2 },
//   { authorId: id(), content: 'Dogs are great!', channelId: 3 },
//   { authorId: id(), content: 'Cats are also great!', channelId: 3 },
//   { authorId: id(), content: 'Why must we fight so?', channelId: 3 },
//   { authorId: id(), content: 'I want to get tacos!', channelId: 4 },
//   { authorId: id(), content: 'I want to get salad!', channelId: 4 },
//   { authorId: id(), content: 'I want a taco salad!', channelId: 4 }
// ];

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

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding database...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
