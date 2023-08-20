const express = require('express');
const connectToMongo = require('./dbconnect');
const app = express();
const port = 3000;

connectToMongo();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
