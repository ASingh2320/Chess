const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login'
    });
});

router.get('/chessboard', (req, res) => {
    res.render('chessboard');
})

module.exports = router;