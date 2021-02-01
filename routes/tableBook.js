const express = require('express');
const Customer = require('../models/bookTable');
const router = express.Router();

router.get('/reservation', (req,res) => {
    res.send('Reservation here');
});

router.post('/reservetion', async(req, res) =>{
try{
    const customer = new Customer(req.body);
    const createCustomer = await customer.save();
    res.status(201).send(createCustomer);

}catch(err){
    res.status(500).send(err);
    console.log(err);
}
});

module.exports = router;
