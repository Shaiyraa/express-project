const express = require('express');
const friendsRouter = require('./routes/friends.router');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const reqStart = Date.now();
  next();
  
  const delta = Date.now() - reqStart;
  console.log(`${req.method} ${req.baseUrl}${req.url} | ${delta}ms`);
})
app.use(express.json());

app.use('/friends', friendsRouter);

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});