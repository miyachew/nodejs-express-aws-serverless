# Nodejs express aws serverless
Express with aws api gateway and lambda. Code auto deploy to aws on master branch.

### This repo support 2 api, no database involved in this code.
- `POST /auth/login` with userId parameter in the body to generate JWT token with userId
- `GET /users` to with token check and return error if token not found or cannot be decoded with jwt. 


### Initial setup for project
Run `npm install` to install all node modules

### Set up .env files
Copy .env.example in the src folder and add the value

### Set up Github action
Auto deploy to aws when merge code to master. 
Add `AWS_ACCESS_KEY_ID` , `AWS_SECRET_ACCESS_KEY`, `AWS_REGION` in github secrets.
