# node_jwt_authentication

#Videos tutorials for JWT
https://www.youtube.com/watch?v=7nafaH9SddU&t=273s
https://github.com/gitdagray/nodejs_jwt_auth/tree/main


#JWT Token documentation
https://github.com/auth0/node-jsonwebtoken

================================ GET JWT TOKEN ================================
POST:        localhost:5000/api/login
RESPONSE:   
{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VyIjoibmFlZW0iLCJlbWFpbCI6Im5hZWVtQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MDE3NjYxNjJ9.FykviNtEg7PYos6mfMPht_WxC5oC5uhpuA8cKC6IAUw"}

================================ GET JWT TOKEN ================================

================================ VERIFY JWT TOKEN ================================
POST:       localhost:5000/api/posts
Headers     Authoriation    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VyIjoibmFlZW0iLCJlbWFpbCI6Im5hZWVtQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MDE3NjYxNjJ9.FykviNtEg7PYos6mfMPht_WxC5oC5uhpuA8cKC6IAUw

RESPONSE:
{
    "message": "post created",
    "authData": {
        "user": {
            "id": 1,
            "user": "naeem",
            "email": "naeem@gmail.com"
        },
        "iat": 1701766162
    }
}
================================ VERIFY JWT TOKEN ================================