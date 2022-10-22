# OTOT-B
## CS3219 OTOT-B Repo

To start the server on localhost, run the following

    git clone https://github.com/ngzhenteng/OTOT-B.git
    cd OTOT-B
    npm i
    npm start

## API Documentation

All requests correspond to the endpoint "/api/users/user"

### URLs
Deployed URL on Google App Engine(Please do not spam this link as requests cost money): 
    
    https://cs3219-365613.as.r.appspot.com

Localhost URL: 

    http://localhost:9999

## Get request
execute a get request to \<url>/api/users/user/\<username>, the server responds with the user detail json.


## Post request
execute a post request to \<url>/api/users/user/\<username>
The username for the new user is embedded in the URL

Request body(Details of the user):

    {"name":"alice anderson", "email": "scammer@gmail.com"}

## Put request
execute a put request to \<url>/api/users/user/\<username> to update user details. Newly attached details will be appended to existing details. If a key in the new detail json already exists, the old value in the records will be replaced.

Request body(Details of the user):

    {"name":"alis anderson", "membership years": "22", "email": "scammerPrime@gmail.com"}

## Delete request
execute a delete request to \<url>/api/users/user/\<username>