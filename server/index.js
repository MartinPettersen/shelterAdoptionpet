const dotenv = require('dotenv').config();
// import fetch from "node-fetch"
// const fetch = require('node-fetch');
const axios = require('axios');
const express = require('express');
// import 'dotenv/config';
//import express from 'express;'
const app = express ();


const randomNumber = (top) => {
    return Math.floor(Math.random() * top);
};

const animalProfileCreator = (url, animal) => {
    const nameList =['Trofast', 'Passop', 'Arg', 'Steve', 'Anna', 'Snulte', 'Lisa'];
    console.log('reached profile creator');
    const animalProfile = {
        animal: animal,
        url: url,
        shown: false,
        age: randomNumber(7),
        name: nameList[randomNumber(nameList.length)]
    }
    return animalProfile;
}

const animalPopulator = (listOfAnimals, animalType) => {
    console.log('reached animalPopulator');
    const newList = [];
    return listOfAnimals.map(animal => animalProfileCreator(animal.urls.regular, animalType));

}

const randomArrayItem = (array) => {
    return array[randomNumber(array.length)];
};

app.get("/api/animals", async ( req, res) => {
    const animalList = ['cat', 'dog', 'bunny', 'duck', 'puppy', 'kitten'];
    
    console.log('animal: ' + randomArrayItem(animalList));

    let testImg = []
    let testPicture = await axios.get('https://api.unsplash.com/search/photos/', 
    { params: 
        { query : 'cat}',
        orientation: 'portrait'
    }, headers: {
        Authorization:
        'Client-ID '+ process.env.ACCESS_KEY
    }
    }).then(response => {
    //    console.log('----');
    //    console.log(response.data.results[0].urls.regular);
    //    console.log(animalProfileCreator("testurl", "Albert"));
    //    console.log('----');
        // console.log(typeof response.data.results);

        // console.log(response.data.results[0]);
        
        // testImg.push.apply(testImg, response.data.results);
        const newArray = testImg.concat(response.data.results);
        // console.log(newArray);
        return newArray
    }).then( response => {
        //console.log('her');
        // console.log(typeof response);
        const test = animalPopulator(response, 'cat');
        console.log(test);
        return test;
    }).then( response => {
        console.log(response);
        res.send(response);
    }

    );

});

app.listen(8080, () => (console.log("server started on port 8080")));
