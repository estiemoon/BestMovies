const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const awardRouter = require('./routes/awards');
const userRouter = require('./routes/users');
const bookmarkRouter = require('./routes/movieBookmarks');
const reviewRouter = require('./routes/reviews');

app.use('/awards', awardRouter);
app.use('/users', userRouter);
app.use('/bookmarks', bookmarkRouter);
app.use('/reviews', reviewRouter);
app.listen(3000, () => console.log('Server is running on port 3000'));