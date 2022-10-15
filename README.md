# OTOT-B
CS3219 OTOT-B Repo

API Documentation

All requests correspond to the endpoint "/api/users/user"

## Get request
execute a get request to localhost:9999/api/users/user/<username>, the server responds with the user detail json.


## Post request
execute a post request to localhost:9999/api/users/user

Request body:

    {"name":"john doe", "email": "johndoe@gmail.com"}

## Put request
execute a put request to localhost:9999/api/users/user to update user details. Newly attached details will be appended to existing details. If a key in the new detail json already exists, the old value in the records will be replaced.

Request body:

    {"name":"john dough", "gender": "male"}

## Delete request
execute a delete request to localhost:9999/api/users/user/<username>