import express from "express";


// mport Routes 
import movieRoutes from "./routes/movieRoutes.js";

const app = express(); 

//  API ROUTES 
app.use("/movies", movieRoutes);


const PORT = 5001;
const server = app.listen(PORT, () =>{
    console.log(`server running on PORT ${PORT}`);
})



// GET, POST, PUT, DELETE 
// http://localhost:5001 

// AUTH - signin, signup
// MOVIE - GETTING ALL MOVIES 
// USER- Profile 
// WATCHLIST 
