module.exports={
    getInventory:(req, res) => {
        req.app.get('db').get_inventory().then((inventory) => {
            res.status(200).send(inventory);
        })
        .catch(err=>{
            console.log(err)
        })        
    },
    createProduct:(req, res) => {
        const { product_name, url, price } = req.body;
        req.app.get('db').create_product([product_name, url, price])
            .then(() => {
                res.sendStatus(200)
            })
    },
    deleteProduct:(req, res) => {
        const { id } = req.params
        req.app.get('db').delete_product(id).then(() => {
            res.sendStatus(200)
        })
    }

}