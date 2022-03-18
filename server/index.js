const dotenv = require('dotenv').config();
const axios = require('axios');
const express = require('express');
const { uuid } = require('uuidv4');
const app = express ();
const cors = require('cors');

const randomNumber = (top) => {
    return Math.floor(Math.random() * top);
};

const getLifeMotto = (animal) => {
    let motto = '';
    if (animal === 'cat'){
        motto = 'MJAU';
    } else if (animal === 'dog'){
        motto = 'Bark!';
    } else if (animal === 'bunny'){
        motto = '#&/!(&#%';
    } else if (animal === 'duck'){
        motto = 'Quack';
    } else if (animal === 'puppy'){
        motto = 'voff';
    } else if (animal === 'kitten'){
        motto = 'mjau';
    } 
    return motto;
}
const animalProfileCreator = (url, animalType) => {
    const nameList =['Trofast', 'Passop', 'Arg', 'Steve', 'Anna', 'Snulte', 'Lisa'];
    const animalProfile = {
        id: uuid(),
        animal: animalType,
        url: url,
        motto: getLifeMotto(animalType),
        shown: false,
        age: randomNumber(7),
        name: nameList[randomNumber(nameList.length)],
        contact: '555-555-555',
    }
    return animalProfile;
}

const animalPopulator = (listOfAnimals, animalType) => {
    return listOfAnimals.map(animal => animalProfileCreator(animal.urls.regular, animalType));
}

app.use(cors());
app.get("/api/animals/:test", async ( req, res) => {
    let testImg = []
    let testPicture = await axios.get('https://api.unsplash.com/search/photos/', 
    { params: 
        { query : `${req.params.test}}`,
        orientation: 'portrait'
    }, headers: {
        Authorization:
        'Client-ID '+ process.env.ACCESS_KEY
    }
    }).then(response => {
        const newArray = testImg.concat(response.data.results);
        return newArray
    }).then( response => {
        const test = animalPopulator(response, req.params.test);
        return test;
    }).then( response => {
        res.send(response);
    }
    );
});

app.listen(8080, () => (console.log("server started on port 8080")));
