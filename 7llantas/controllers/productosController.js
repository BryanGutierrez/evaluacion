const producto = require('../model/productosModel');

const productoController = {
    get: (req, res) => {
        var params = req.params.params;
        var query = { codigo: params };
        producto.find(query)
            .then(data => {
                if (data.length == 0) {
                    query = { SKU: params }
                    producto.find(query).then(data => {
                        if (data.length == 0) {
                            res.json({ error: 'No se encontraron coicidencias con el parámetro proporcionado.' }).status(500);
                        } else {
                            res.json(data[0]).status(200)
                        }
                    }).catch(err => {
                        res.json({ error: 'Error al realizar la búsqueda, intente más tarde.' }).status(500);
                    })
                } else {
                    res.json(data[0]).status(200)
                }
            }
            )
    }
}

module.exports = productoController;