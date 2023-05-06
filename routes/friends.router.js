const express = require('express');
const { postFriend, getFriends, getFriend } = require('../controllers/friends.controller')

const router = express.Router();

router.post('/', postFriend);
router.get('/', getFriends);
router.get('/:id', getFriend);

module.exports = router;