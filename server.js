const express = require('express');
const friendsController = require('./controllers/friends.controller')

const app = express();

const PORT = 3000;


app.use((req, res, next) => {
  const reqStart = Date.now();
  next();
  
  const delta = Date.now() - reqStart;
  console.log(`${req.method} ${req.url} | ${delta}ms`);
})

app.use(express.json());

app.post('/friends', friendsController.postFriend);
app.get('/friends', friendsController.getFriends);
app.get('/friends/:id', friendsController.getFriend);

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});