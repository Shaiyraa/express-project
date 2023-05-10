const express = require('express');
const path = require('path');
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
  const reqStart = Date.now();
  next();

  const delta = Date.now() - reqStart;
  console.log(`${req.method} ${req.baseUrl}${req.url} | ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My friends',
    caption: "Let's go skiing!",
  });
});
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
