const dotenv = require("dotenv");
const express = require('express');
const app = express();
// const cors = require('cors');

dotenv.config({ path: './.env' });

require('./db/conn');

// app.use(cors());

app.use(express.json());

app.use('/api',require('./routes/route'));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})
