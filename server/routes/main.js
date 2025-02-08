const express = require('express');
const router = express.Router();


// ROUTES
router.get('', (req, res)=> {
  const locals = {
    title: "PlayerCTRL",
    description: "For Players By Players."
  }


    res.render('index', { locals });
  });

  router.get('/about', (req, res)=> {
    res.render('about');
  });
  

module.exports = router;