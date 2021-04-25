const express = require('express');
const Menu = require('../models/menuItem');

const router = express.Router();

router.post('/menu', async(req, res) =>{
    try{
        const menu = new Menu({
            Name: req.body.Name,
            Description: req.body.Description,
            Price: req.body.Price,
            Catagory: req.body.Catagory
        });
        const createMenu = await menu.save();
        res.status(201).send(createMenu);
    }catch(err){
        res.status(500).send(err);
    }
});

router.get('/menu', async(req, res) =>{
    try{
        const menu = await Menu.find();
        res.status(200).send(menu);
    }catch(err){
        res.status(404).send(err);
    }
    
});
router.get('/menu/:id', async(req, res) =>{
    try{
        const _id = req.params.id;
        const item = await Menu.findById(_id);
        res.status(200).send(item);
    }catch(err){
        res.status(404).send(err);
    }
});
router.put('/menu/:id', async(req,res) =>{
    try{
        const _id = req.params.id;
        const menuUpdate = await Menu.findByIdAndUpdate(_id, req.body,({
            new: true
        }));
        res.status(201).send(menuUpdate);
    }catch(err){
        res.status(500).send(err);
    }
});
router.delete('/menu/:id', async(req,res) =>{
    try{
        const _id = req.params.id;
        const menuDelete = await Menu.findByIdAndDelete(_id); 
        if(!_id){
            res.status(404).send('NOT FOUND');
        }
        res.status(200).send(menuDelete);
    }catch(err){
        res.status(500).send(err);
    }
})
module.exports = router;