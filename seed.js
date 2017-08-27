var Promise = require('bluebird');
var db = require('./db');
var Student = require('./db/models').Student;
var Campus = require('./db/models').Campus;

var data = {
  student: [
    {name: "Erin"},
    {name: "Kimberly"},
    {name: "Gabby"},
    {name: "Jennifer" },
    {name: "Michelle"},
    {name: "Emily"},
    {name: "Erika"},
    {name: "Mieka"},
  ],
  campus: [
    {name: "Gryffindor", imgUrl: 'https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_01-5B1-5D.jpg'},
    {name: "Ravenclaw", imgUrl: 'https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_rav-200x0-c-default.jpg'},
    {name: "Hufflepuff", imgUrl: 'https://vignette3.wikia.nocookie.net/harrypotter/images/e/e4/Hufflepuff.jpg/revision/latest?cb=20110817075555'},
    {name: "Slytherin", imgUrl: 'http://vignette1.wikia.nocookie.net/harryalbuspotter/images/4/45/Slytherin_by_melisarodriguez-d47ly0k.png/revision/latest?cb=20140621170234'}
  ],
};

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      return db.model(name)
      .create(item);
    });
  });
})
.then(function () {
  console.log("Finished inserting data");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function () {
  db.close() // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
  console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
  return null; // silences bluebird warning about using non-returned promises inside of handlers.
});

//seed file from stackchat below. Use when creating YOUR seed file

const db = require('./server/db');
const Author = require('./server/db/models/author');
const Message = require('./server/db/models/message');
const Channel = require('./server/db/models/channel');

const channels = [
  { name: 'really_random' },
  { name: 'generally_speaking' },
  { name: 'dogs_of_fullstack' },
  { name: 'lunch_planning' }
];

const authors = [{
  name: 'Cody',
  image: '/images/cody.jpg'
}, {
  name: 'Ben',
  image: '/images/ben.jpg'
}, {
  name: 'Star',
  image: '/images/star.jpg'
}, {
  name: 'Batman',
  image: '/images/batman.jpg'
}, {
  name: 'Elliott',
  image: '/images/elliott.jpg'
}, {
  name: 'Fira',
  image: '/images/fira.jpg'
}, {
  name: 'Henry',
  image: '/images/henry.jpg'
}, {
  name: 'Marcy',
  image: '/images/marcy.jpg'
}, {
  name: 'Milton',
  image: '/images/milton.jpg'
}, {
  name: 'Murphy',
  image: '/images/murphy.jpg'
}, {
  name: 'Raffi',
  image: '/images/raffi.jpg'
}, {
  name: 'Tulsi',
  image: '/images/tulsi.jpg'
}, {
  name: 'Pork Chop',
  image: '/images/pork_chop.jpg'
}, {
  name: 'Ribs',
  image: '/images/ribs.jpg'
}, {
  name: 'Stacey',
  image: '/images/stacey.jpg'
}, {
  name: 'JD',
  image: '/images/jd.jpg'
}, {
  name: 'BenBen',
  image: '/images/benben.png'
}, {
  name: 'Odie',
  image: '/images/odie.jpg'
}];

const id = () => Math.round(Math.random() * (authors.length - 1)) + 1;

const messages = [
  { authorId: id(), content: 'I like React!', channelId: 1 },
  { authorId: id(), content: 'I like Redux!', channelId: 1 },
  { authorId: id(), content: 'I like React-Redux!', channelId: 1 },
  { authorId: id(), content: 'I like writing web apps!', channelId: 2 },
  { authorId: id(), content: 'You should learn JavaScript!', channelId: 2 },
  { authorId: id(), content: 'JavaScript is pretty great!', channelId: 2 },
  { authorId: id(), content: 'Dogs are great!', channelId: 3 },
  { authorId: id(), content: 'Cats are also great!', channelId: 3 },
  { authorId: id(), content: 'Why must we fight so?', channelId: 3 },
  { authorId: id(), content: 'I want to get tacos!', channelId: 4 },
  { authorId: id(), content: 'I want to get salad!', channelId: 4 },
  { authorId: id(), content: 'I want a taco salad!', channelId: 4 }
];

const seed = () =>
  Promise.all(authors.map(author =>
    Author.create(author))
  )
  .then(() =>
  Promise.all(channels.map(channel =>
    Channel.create(channel))
  ))
  .then(() =>
  Promise.all(messages.map(message =>
    Message.create(message))
  )
);

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
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
