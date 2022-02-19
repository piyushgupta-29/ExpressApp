const express = require('express');
const router = express.Router();

router.get('/api/1', async(req, res) => {
    try{
        let x = 4;
        
        res.send(x.toString());
    }
    catch(err){
        console.log('could not get data');
    }
});

router.get('/api/2', async(req,res) => {
    try{
        let x = 5.3;
        res.send(x.toString());
    }
    catch(err){
        console.log('could not get data');
    }
});

router.get('/api/3', async(req,res) => {
    try{
        let x = [4,5.3,6.9,4.0,3.3];
        res.send(x.toString());
    }
    catch(err){
        console.log('could not get data');
    }
});

router.get('/api/4', async(req,res) => {
    try{
        let x = [3,4.2,9.8,6];
        let time = new Date();
        let h = time.getHours().toString();
        let m = time.getMinutes().toString();
        let s = time.getSeconds().toString();
        res.write(x.toString()+'\n');
        res.write(`${h}:${m}:${s}`);
        res.send();
    }
    catch(err){
        console.log('could not get data');
    }
});

module.exports = router;