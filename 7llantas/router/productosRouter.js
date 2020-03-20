const router = require('express').Router();

const productosController = require('../controllers/productosController');

router.get('/:params', (req, res) => {
    console.log(req.headers);
    if(req.headers.token!='123'){
        res.send({error:'No está autorizado para acceder a esta información.'}).status(500);
    }else {
        productosController.get(req, res);
    }
    
});



module.exports = router;