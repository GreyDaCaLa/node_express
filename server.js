// import express from "express";
// import morgan from "morgan";
// import path from "fs";

const express = require("express")
const morgan = require("morgan")
const path = require("path")
const fs = require("fs")


const app = express();
app.use(express.json()); //so that we can see our request body

app.use(morgan("dev"));

app.get("/",(req,res) =>{
    try{
        res.status(200).sendFile(path.join(__dirname,"./public/home.html"));
    }
    catch(error){
        next(error);}

})

app.get("/user",(req,res) =>{
    try{
        res.status(200).sendFile(path.join(__dirname,"./public/user.html"));
    }
    catch(error){
        next(error);}

})

app.get("/admin",(req,res) =>{
    try{
        res.status(200).sendFile(path.join(__dirname,"./public/admin.html"));
    }
    catch(error){
        next(error);}

})


app.get("/pokemon",(req,res) =>{
    try{
        res.status(200).sendFile(path.join(__dirname,"./assets/pokeList.json"));
    }
    catch(error){
        next(error);}

})

app.post("/pokemon",(req,res,next) =>{
    try{
        let reqbody =req.body;



        // fs.appendFile(path.join(__dirname,"./assets/pokemon.json"), reqbody); //wouldn't be added in the correct syntax
        fs.readFile(path.join(__dirname,"./assets/pokeList.json") , (err,data)=>{
            if(err){
                console.log(err)
                throw err;
            }

            let pokemonArr= JSON.parse(data);
            console.log("before",reqbody);
            // console.log("req",req.body)
            reqbody.id = pokemonArr.pokemon[pokemonArr.pokemon.length-1].id+1;
            pokemonArr.pokemon.push(reqbody);
            console.log("after",reqbody);

            fs.writeFile(path.join(__dirname,"./assets/pokeList.json"),JSON.stringify(pokemonArr), (err)=>{
                if(err){
                    console.log(err)
                    throw err;
                }
                res.status(200).json({msg: "Successfully aded pokemon to list!"});
            })
        })
        console.log("the post was added successfully!");
        // res.end();
    }
    catch(error){
        next(error);}

})

app.put("/pokemon/:id",(req,res) =>{
    try{
        let pokeid =req.params.id;
        let reqbody =req.body;



        // fs.appendFile(path.join(__dirname,"./assets/pokemon.json"), reqbody); //wouldn't be added in the correct syntax
        fs.readFile(path.join(__dirname,"./assets/pokeList.json") , (err,data)=>{
            if(err){
                console.log(err)
                throw err;
            }

            let mid = JSON.parse(data);
            let pokemonArr = mid;
            pokemonArr.pokemon = mid.pokemon.map((item)=>{
                if(item.id == pokeid){
                    return reqbody;
                }
                return item;
            })
            // console.log("before",reqbody);
            // console.log("req",req.body)
            // console.log("after",reqbody);

            


            fs.writeFile(path.join(__dirname,"./assets/pokeList.json"),JSON.stringify(pokemonArr), (err)=>{
                if(err){
                    console.log(err)
                    throw err;
                }
                res.status(200).json({msg: "Successfully aded pokemon to list!"});
            })
        })
        console.log("the post was added successfully!");
        // res.end();
    }
    catch(error){
        next(error);}

})

app.delete("/pokemon/:id",(req,res) =>{
    try{
        const pokeid =req.params.id;

        fs.readFile(path.join(__dirname,"./assets/pokeList.json") , (err,data)=>{
            if(err){
                console.log(err)
                throw err;
            }

            let mid = JSON.parse(data);
            let pokemonArr = mid;
            pokemonArr.pokemon = mid.pokemon.filter((item)=>{
                return (item.id != pokeid)
            })
            


            fs.writeFile(path.join(__dirname,"./assets/pokeList.json"),JSON.stringify(pokemonArr), (err)=>{
                if(err){
                    console.log(err)
                    throw err;
                }
                res.status(200).json({msg: "Successfully aded pokemon to list!"});
            })
        })
        console.log("the post was added successfully!");
        // res.end();
    }
    catch(error){
        next(error);}

})

app.get("*", (req,res,next)=>{
    try{
        res.status(404).sendFile(path.join(__dirname,"./public/404page.html"));
    }
    catch(error){
        next(error);}
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({errors:{error: error.message}})
})

app.listen(3000, ()=>console.log("Server Listen with Express server on port 3000..."))


function pokemonPUT(id,reqbody){
    console.log("doSomthing");
}

function pokemonDELETE(id){
    console.log("doSomthing");
}











