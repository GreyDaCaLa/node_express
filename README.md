# node_express


Part 1

Create a new project folder named “express_routing”

Initialize npm in the project

Npm install express and morgan

Create a server.js file

Import express, path, and morgan into server.js

Create at least 3 “GET” routes and use res.sendFile() to send 3 different html pages to the client, depending on the route requested

Account for server errors with a custom error handler

BONUS

Fetch a list of pokemon from https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json and write the results to a .json file (only do this for set up)

Create 4 endpoints for GET (getting the list of all pokemon), POST (adding a pokemon to the file), PUT (updating an existing pokemon in the file, and DELETE (removing a pokemon from the file
    Your GET route should just read and return the list of pokemon from the json file
    Your POST request should receive a request body and write the new pokemon to the list in the json file
    Your PUT request should receive a request body and pokemon id to both select and update a pokemon in the list
    Your DELETE request should receive a pokemon id to remove a pokemon from the list
