# express-aws-serverless
express with aws api gateway and lambda

### This repo support 2 api, no database involved in this code.
- `POST /auth/login` with userId parameter in the body to generate JWT token with userId
- `GET /users` to with token check and return error if token not found or cannot be decoded with jwt. 

### Set up .env files
Copy .env.example in the src folder and add the value
