module.exports={
    getInventory:(req, res) => {
        req.app.get('db').get_inventory().then((inventory) => {
            res.status(200).send(inventory);
        })
        .catch(err=>{
            console.log(err)
        })        
    },
    createProduct:(req,res) =>{
        res.status(200).json("Yoooohoooooo")
    }

}