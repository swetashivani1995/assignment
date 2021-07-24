import express from 'express';
import axios from 'axios';
import { config,port } from './config.js'
const app = express()


app.use(function (req, res, next) {
    // Allow requests from anywhere
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

/*
  Returns top headlines for the UK
*/
app.get('/headlines', (req, response,next) => {
    axios.get(`${config.NEWS_API}top-headlines?country=${config.country}&apiKey=${process.env.token}`)
    .then((res)=>{
        let articles = res.data.articles
        response.send(JSON.stringify(articles))
    }) .catch((err)=>{
        console.log(err);
        next(err) 
    })
});

/*
  Takes a query string argument (q) and returns filtered results 
*/
app.get('/filters', (req, response,next) => {
    const query = req.query.q
    axios.get(`${config.NEWS_API}everything?q=${query}&apiKey=${process.env.token}`)
        .then((res)=>{
            let articles = res.data.articles
        response.send(JSON.stringify(articles))
        })
        .catch((err)=>{
            console.log(err);
            next(err) 
        })
});

app.listen(port, () => console.log(`News API listening on port ${port}!`))