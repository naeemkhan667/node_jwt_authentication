const express = require('express')
const jwt = require('jsonwebtoken');

const app = express();

app.get('/', (req, res) => {
    res.json('Welcome to API');
});

app.post('/api/posts', verifyToken, (req, res) => {

    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({ message: 'post created', authData });
        }

    });
    
});

app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        user: 'naeem',
        email: 'naeem@gmail.com'
    };
    jwt.sign({ user: user }, 'secretkey',{expiresIn: '30s'}, (err, token) => {
        res.json({ token: token })

    });
});

//Verify token middleware function
//const verifyToken = (req, res, next) => {
function verifyToken(req, res, next) {
    //Get the auth header value
    //console.log(req.headers);
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        return res.sendStatus(403);
    }
}

app.listen(5000, () => {
    console.log('Server running on port 5000');
})