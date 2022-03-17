const dotenv = require('dotenv').config();
// import fetch from "node-fetch"
// const fetch = require('node-fetch');
const axios = require('axios');
const express = require('express');
// import 'dotenv/config';
//import express from 'express;'
const app = express ();

const { getImages } = require('./getImages');

app.get("/api/", ( req, res) => {
    res.json({"test": ["a one", "a two", "a three"]});
    //res.json({"test": [process.env.ACCESS_KEY]})
});

app.get("/api/animals", async ( req, res) => {
    let testImg = []
    let testPicture = await axios.get('https://api.unsplash.com/search/photos/', { params: { query : 'cat}', orientation: 'landscape'}, headers: {
        Authorization:
        'Client-ID '+ access_key
    }
    }).then(response => {
        console.log('----');
        console.log(response.data.results[0].urls.regular);

        console.log('----');
        testImg = response;
        res.send({"test": response.data.results})
    
    });

});

app.listen(8080, () => (console.log("server started on port 8080")));
