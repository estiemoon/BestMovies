const express = require('express');
const app = express();

const awardRouter = require('./routes/awards');
const userRouter = require('./routes/users');
const refresh = require('./middleware/refresh');

app.use('/awards', awardRouter);
app.use('/users', userRouter);

app.listen(3000, () => console.log('Server is running on port 3000'));