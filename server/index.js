const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
const { MONGO_URI } = require('./config/keys');
mongoose
    .connect(MONGO_URI)
    .then(() => console.log('Mongo database connected'))
    .catch(err => console.error(`error to connect database ,${err}`));

const app = express();

app.use(cors());

app.use(bodyParser.json({ type: "*/*" }));
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/api/user', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
    if (err) console.error('Error to connect server ', err);
    console.log(`Server connected on port ${PORT}`);
});
