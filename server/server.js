const express = require('express');
const app = express();
const jwt = require('express-jwt');
const cors = require('cors');

app.use(cors());

const authCheck = jwt({
  secret: new Buffer('0bgGYrez3Kyo-n0xvqnnGn6f3X-0z-6AgqYhSIlDhk6tPZJuSnf3ZWisQt1-LgGR', 'base64'),
  audience: 'YOUVFCoOkFONDocGrdji0E1zBth9v1lC'
});

var contacts = [
  {
    id: 1,
    name: 'John Snow',
    email: 'John@winterfell.com',
    image: 'http://cdn.movieweb.com/img.news.tops/NEaMHVFvWpoJeh_2_b.jpg'
  },
  {
    id: 2,
    name: 'Daenarys stormborn',
    email: 'Danny@Westeros.com',
    image: 'https://pbs.twimg.com/profile_images/479913405059710976/_2OVcczp_400x400.jpeg'
  },
  {
    id: 3,
    name: 'Tyrion Lannister',
    email: 'ty@redkeep.com',
    image: 'https://visionsoiaf.files.wordpress.com/2011/08/euclase-tyrion-lannister.jpg'
  },
  {
    id: 4,
    name: 'Sansa Stark',
    email: 'Sansa@winterfell.com',
    image: 'http://www.stuff.co.nz/content/dam/images/1/2/8/u/r/e/image.related.StuffLandscapeSixteenByNine.620x349.14vy6n.png/1432001909577.jpg'
  },
  {
    id: 5,
    name: 'Cercie Lannister',
    email: 'Cercie@redkeep.com',
    image: 'https://pbs.twimg.com/profile_images/378800000769453762/8fbe7ec07f238b8a91fa3962235c5ef2.jpeg'
  }
];

app.get('/api/contacts', (req, res) => {
  const allContacts = contacts.map(contact => {
    return { id: contact.id, name: contact.name, image: contact.image}
  });
  res.json(allContacts);
});

app.get('/api/contacts/:id', authCheck, (req, res) => {
  res.json(contacts.filter(contact => contact.id === parseInt(req.params.id)));
});

app.listen(3001);
console.log('Listening on http://localhost:3001');
