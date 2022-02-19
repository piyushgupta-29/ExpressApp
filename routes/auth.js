const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require("../model/userSchema");

router.get('/api1', (req, res) => {
    res.send(`Response from api1`);
});

router.get('/api2', (req, res) => {
    res.send(`Response from api2`);
});

router.get('/api3', (req, res) => {
    res.send(`Response from api3`);
});

router.get('/api4', (req, res) => {
    res.send(`Response from api4`);
});

router.get('/api5', (req, res) => {
    res.send(`Response from api5`);
});

router.get('/api6', (req, res) => {
    res.send(`Response from api6`);
});

router.get('/api7', (req, res) => {
    res.send(`Response from api7`);
});

router.get('/api8', (req, res) => {
    res.send(`Response from api8`);
});

router.get('/api9', (req, res) => {
    res.send(`Response from api9`);
});

router.get('/api10', (req, res) => {
    res.send(`Response from api10`);
});