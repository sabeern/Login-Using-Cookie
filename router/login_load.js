const express = require('express');
const router = express.Router();
router.get('/',(req,res)=> {
    const { cookies }=req;
    if(cookies.session_id==req.session.id) {
        res.redirect('/home');
    }else {
        res.render('login');   
    }
});

module.exports=router;
