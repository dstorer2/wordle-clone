const express = require('express');
const app = express();
const cors = require("cors");
const axios = require("axios");
require('dotenv').config();

const port = process.env.PORT || 1234;
const key = process.env.API_KEY;

app.use(cors());

const searchDictionary = async word => {
    let validWord = false;
    console.log(key)
    await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${key}`)
        .then(res => {
            res.data[0].meta !== undefined ? validWord = true : null
        })
        .catch(err => console.log(err))
    return validWord;
}

app.get('/api/:word', async (req, res) => {
    console.log("made it to the server")
    const result = await searchDictionary(req.params.word)
    res.send({
        valid: result
    })
})



app.listen(port, () => {
    console.log(key)
    console.log(`wordle-clone server listening on port ${port}`)
})