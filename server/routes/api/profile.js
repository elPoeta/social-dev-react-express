const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({ msg: 'profile message' });
});

module.exports = router;