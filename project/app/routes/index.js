
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {//main index page
        pageTitle: 'Home',

        pageID: 'home'
    });

});
//routing pages
router.get('/about', function (req, res) {//about page

    res.render('about', {
        pageTitle: 'About',

        pageID: 'about'
    });
});


router.get('/services', function (req, res) {//services page

    res.render('services', {
        pageTitle: 'Services',

        pageID: 'services'
    });
});



router.get('/ourteam', function (req, res) {//our team pages

    res.render('ourteam', {
        pageTitle: 'Ourteam',

        pageID: 'ourteam'
    });
});



router.get('/contact', function (req, res) {//contact page
    res.render('contact', {
        pageTitle: 'Contact',

        pageID: 'contact'
    });
});

module.exports = router;