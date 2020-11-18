const express = require('express');
const app = express();
const connectToDB = require('./config/db');
const cors = require('cors');
const FoodBank = require('./models/FoodBank');


// I've written this function in the config folder
connectToDB();


app.get('/', (req, res) => res.send('Server Running ~~~'));

// linking schemas with server.js
require('./models/FoodBank')

// middleware for parsing req.body
app.use(cors())
app.use(express.json({ extended: false }));

app.use(require('./routes/api/search-zip.route'))

// will look for environment port, but if not, defaults to 5000
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server now running on port ${PORT}`));





///  This was helpful for Express.js fundamentals
///  https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose



