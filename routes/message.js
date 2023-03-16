var express = require ('express');
var router = express.Router();

router.get{'/:id', function(req, res, next) {
    var id = req.params.id;


    var data = {
        name: '',
        msg: ''

    };
    res.render('message', {data:data});


    if (id=='abc2') {
        res.render('message', {
            name: '',
            msg: ''
        });
    } else {
        res.end('Invalid Request.');
    }
}};

module.exports = router;