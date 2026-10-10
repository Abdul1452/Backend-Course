import express from "express";
import { 
    addToWatchlist, 
    updateWatchlistItem, 
    removeFromWatchlist 
} from "../controllers/watchlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";
import {
    addToWatchlistSchema,
    updateWatchlistSchema,
} from "../validators/watchlistValidator.js";

const router = express.Router();


router.use(authMiddleware);
router.post("/", validateRequest(addToWatchlistSchema), addToWatchlist);

// {{baseUrl}}/watchlist/:id
router.put("/:id", validateRequest(updateWatchlistSchema), updateWatchlistItem);

// {{baseUrl}}/watchlist/:id
router.delete("/:id", removeFromWatchlist)



export default router;