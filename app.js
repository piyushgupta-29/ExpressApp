const dotenv = require("dotenv");
const express = require('express');
const app = express();

dotenv.config({ path: './.env' });

require('./db/conn');

app.use(express.json());

app.use(require('./routes/auth'));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})
