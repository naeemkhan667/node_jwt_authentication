const express = require('express')
const jwt = require('jsonwebtoken');

const app = express();

app.get('/', (req, res) => {
    res.json('Welcome to API');
});

app.post('/api/posts', (req, res) => {
    res.json({ message: 'post created' });
});

app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        user: 'naeem',
        email: 'naeem@gmail.com'
    };
    jwt.sign({user: user}, 'secretkey', (err, token) => {
        res.json({token: token})

    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
})