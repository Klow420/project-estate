import express from 'express';

const app = express();

app.listen(3200, () => {
    console.log('Server is running on port 3200');
});