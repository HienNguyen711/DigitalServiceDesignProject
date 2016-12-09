var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

    

  res.render('index', {
    pageTitle: 'Home',

    pageID: 'home'
  });

});
router.get('/about', function(req, res) {

    
 


 res.render('about', {
    pageTitle: 'About',
    
    pageID: 'about'
  });
});


router.get('/services', function(req, res) {

    
 


 res.render('services', {
    pageTitle: 'Services',
    
    pageID: 'services'
  });
});



router.get('/ourteam', function(req, res) {

    
 


 res.render('ourteam', {
    pageTitle: 'Ourteam',
    
    pageID: 'ourteam'
  });
});



router.get('/contact', function(req, res) {

    
 


 res.render('contact', {
    pageTitle: 'Contact',
    
    pageID: 'contact'
  });
});

module.exports = router;
