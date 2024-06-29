const express = require('express');
const app = express();

const awardRouter = require('./routes/awards');

app.use('/awards', awardRouter);




app.listen(3000, () => console.log('Server is running on port 3000'));