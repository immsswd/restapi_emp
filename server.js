'user strict';
const express = require('express');
// ------------mongodb---------------
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
// ------------------------------------
// ------------ROUTES---------------
const postRoute = require('./routes/api/api.posts');
const EmpRoute = require('./routes/api/api.emp');
// -------------------------------------

const app = express();

// bodyParser Middleware
app.use(express.json());

//--------connect to mongodb------------
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('MongoDb is connected'))
    .catch(err => console.log(err));
//--------/connect to mongodb------------

//--------user routes------------
app.use('/api/post', postRoute);
app.use('/api/emp', EmpRoute);
//------------------------------

// listening port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});