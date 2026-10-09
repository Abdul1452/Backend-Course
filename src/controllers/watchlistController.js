import { error } from "node:console";
import { prisma } from "../config/db.js";


const addToWatchlist = async (req, res) => {
    const { movieId, status, rating, notes, userId } = req.body;
    // Verify movie exists

    const movie = await prisma.movie.findUnique ({
        where: {id: movieId},
    });

    if (!movie) {
        return res.status(404).json({ error: "Movie not found"});
    }

    // Check if already added 
     const existingInWatchlist = await prisma.watchlistItem.findUnique ({
        where: {
            userID_movieId: {
                userID: userId,
            movieId: movieId,
        },    
        },

    });

        if (existingInWatchlist) {
        return res.status(400).json({ error: "Movie already in the watchlist" });
    }

    const watchlistItem = await prisma.watchlistItem.create({
        data: {
                userID: userId,
            movieId,
            status: status || "PLANNED",
            rating,
                notes: notes || "",
        },
    });

    res.status(201).json({
        status: "success",
        data: {
            watchlistItem,
        }

    })
};

export { addToWatchlist };