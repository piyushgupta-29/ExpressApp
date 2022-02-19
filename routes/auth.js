const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require("../models/userSchema");

router.get('/api1', async(req, res) => {
    try{
        // const data = await User.find({});
        res.send(`Response from api1`);
    }
    catch(err){
        console.log('could not get data');
    }
});

router.get('/api2', async(req,res) => {
    try{
        // const data = await User.find({});
        res.send(`Response from api2`);
    }
    catch(err){
        console.log('could not get data');
    }
});

router.get('/api3', async(req,res) => {
    try{
        // const data = await User.find({});
        res.send(`Response from api3`);
    }
    catch(err){
        console.log('could not get data');
    }
});

router.get('/api4', async(req,res) => {
    try{
        // const data = await User.find({});
        res.send(`Response from api4`);
    }
    catch(err){
        console.log('could not get data');
    }
});

router.get('/api5', async(req,res) => {
    try{
        // const data = await User.find({});
        res.send(`Response from api5`);
    }
    catch(err){
        console.log('could not get data');
    }
});

router.get('/api6', async(req,res) => {
    try{
        // const data = await User.find({});
        res.send(`Response from api6`);
    }
    catch(err){
        console.log('could not get data');
    }
});

router.get('/api7', async(req,res) => {
    try{
        // const data = await User.find({});
        res.send(`Response from api7`);
    }
    catch(err){
        console.log('could not get data');
    }
});

router.get('/api8', async(req,res) => {
    try{
        // const data = await User.find({});
        res.send(`Response from api8`);
    }
    catch(err){
        console.log('could not get data');
    }
});

router.get('/api9', async(req, res) => {
    try{
        // const data = await User.find({});
        res.send(`Response from api9`);
    }
    catch(err){
        console.log('could not get data');
    }
});

router.get('/api10', async(req, res) => {
    try{
        // const data = await User.find({});
        res.send(`Response from api10`);
    }
    catch(err){
        console.log('could not get data');
    }
});

module.exports = router;