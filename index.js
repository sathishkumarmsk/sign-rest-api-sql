import express from 'express';

const app = express();
const port = 8000;

app.use('/', (req, res) => res.send('Hello Chaal'));

app.listen(port, () => console.log(`Running on http://localhost:${port}`)); 
