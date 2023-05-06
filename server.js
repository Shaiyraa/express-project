const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'John',
  },
  {
    id: 1,
    name: 'Sally',
  },
];

app.use((req, res, next) => {
  const reqStart = Date.now();
  next();
  
  const delta = Date.now() - reqStart;
  console.log(`${req.method} ${req.url} | ${delta}ms`);
})

app.use(express.json());

app.post('/friends', (req, res) => {
  const { name } = req.body
  if(!name) return res.status(400).json({ message: "Invalid name." })

  const newFriend = {
    id: friends.length,
    name
  };

  friends.push(newFriend);

  res.json({
    friend: newFriend
  });
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:id', (req, res) => {
  const friend = friends[req.params.id * 1];
  if(!friend) return res.status(404).json({ message: "Friend not found."});
  
  res.status(200).json(friend);
});

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});