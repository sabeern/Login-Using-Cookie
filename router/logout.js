const express = require('express');
const router = express.Router();
router.post('/logout',(req,res)=> {
    res.clearCookie('session_id');
    res.redirect('/');
});

module.exports = router;