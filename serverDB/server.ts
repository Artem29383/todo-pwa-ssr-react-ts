import express from "express";
import cors from 'cors';

const app = express()

app.use(cors())

const items = [{id: 1, checked: false, text: 'Buy beer'}, {id: 2, checked: false, text: 'Buy milk'}];

app.get('/list', (req, res) => {
    try {
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error', error });
    }
})

app.listen(4333, () => {
    console.log('Express server started at <http://localhost:4333>')
});