const express = require('express');
const Customer = require('../models/bookTable');
const router = express.Router();


router.post('/reservation', async(req, res) =>{
    try{
      const customer = new Customer({
        FullName: req.body.FullName,
        Phone: req.body.Phone,
        Email: req.body.Email,
        BookDate: req.body.BookDate,
        NumberOfGuests: req.body.NumberOfGuests,
        Comments: req.body.Comments
      });
      const createCustomer = await customer.save();
      res.status(201).send(createCustomer);
    }catch(err){
        res.status(500).send(err);
    }
  });
router.get('/reservation', async(req,res) => {
    try{
        const customerData = await Customer.find();
        res.status(200).send(customerData);
    }catch(err){
        res.status(404).send(err)
    }
});


module.exports = router;
