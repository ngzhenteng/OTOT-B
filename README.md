# OTOT-B
## CS3219 OTOT-B Repo

## API Documentation

All requests correspond to the endpoint "/api/users/user"

### URLs
Deployed URL on Google App Engine: 
    
    https://cs3219-365613.as.r.appspot.com

Localhost URL: 

    http://localhost:9999

## Get request
execute a get request to \<url>/api/users/user/\<username>, the server responds with the user detail json.


## Post request
execute a post request to \<url>/api/users/user

Request body:

    {"name":"john doe", "email": "johndoe@gmail.com"}

## Put request
execute a put request to \<url>/api/users/user to update user details. Newly attached details will be appended to existing details. If a key in the new detail json already exists, the old value in the records will be replaced.

Request body:

    {"name":"john dough", "gender": "male"}

## Delete request
execute a delete request to \<url>/api/users/user/\<username>