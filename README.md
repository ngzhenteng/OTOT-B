# OTOT-B
CS3219 OTOT-B Repo

API Documentation

All requests correspond to the endpoint "/api/users/user"

## Get request
execute a get request to localhost:9999/api/users/user, the server responds with the user detail json.

Request body:

    {"username": "user1"}

## Post request
execute a post request to localhost:9999/api/users/user

Request body:

    {"username": "user1", "detailJson": {"name":"john doe", "email": "johndoe@gmail.com"}}

## Put request
execute a put request to localhost:9999/api/users/user to update user details. Newly attached details will be appended to existing details. If a key in the new detail json already exists, the old value in the records will be replaced.

Request body:

    {"username": "user1", "addDetailsJson": {"name":"john dough", "gender": "male"}}

## Delete request
execute a delete request to localhost:9999/api/users/user

Request body:

    {"username": "user1"}