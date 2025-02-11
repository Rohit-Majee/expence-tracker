const express = require('express');
const cors = require('cors');
require('dotenv').config();
const transactionrouter = require('./routes/transaction.route');
const ConnectDB = require("./config/db.mongo");
const path = require("path");


const app = express();
const PORT =process.env.PORT || 5000;
ConnectDB();
const _dirname = path.resolve();


app.use(cors());
app.use(express.json());



app.use('/api/check', (req, res) => {
    res.status(200).json({ message: "API is Running.." })
})

app.use('/api/transaction',transactionrouter);

app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get('*', (req,res)=>{
    res.sendFile(path.resolve(_dirname, "frontend" , "dist", "index.html"));
});

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
});