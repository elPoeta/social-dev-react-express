const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./routes/api/users');
const app = express();

app.use(cors());

app.use(bodyParser.json({ type: "*/*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/users', users);
const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
    if (err) console.error('Error to connect server ', err);
    console.log(`Server connected on port ${PORT}`);
});
