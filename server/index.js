const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getAllCompliment } = require('./controller')
const { getAllFortunes } = require('./controller')
const { createCompliment } = require('./controller')
const { createFortune } = require('./controller')
const { deleteCompliment } = require('./controller')
const { deleteFortune } = require('./controller')
const { getImage } = require('./controller')
const { changeImage } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get('/api/list', getAllCompliment)
app.get('/api/fortList', getAllFortunes)
app.post('/api/list', createCompliment)
app.post('/api/fortList', createFortune)
app.delete('/api/list/:num', deleteCompliment)
app.delete('/api/fortList/:num', deleteFortune)
app.get('/api/image', getImage)
app.put('/api/image/', changeImage)

app.listen(4000, () => console.log("Server running on 4000"));
