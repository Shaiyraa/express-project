const friendsModel = require('../models/friends.model');

function postFriend(req, res) {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Invalid name.' });

  const newFriend = {
    id: friendsModel.length,
    name,
  };

  friendsModel.push(newFriend);

  res.json({
    friend: newFriend,
  });
}

function getFriends(req, res) {
  res.json(friendsModel);
}

function getFriend(req, res) {
  const friend = friendsModel[req.params.id * 1];
  if (!friend) return res.status(404).json({ message: 'Friend not found.' });

  res.status(200).json(friend);
}

module.exports = {
  postFriend,
  getFriends,
  getFriend,
};
