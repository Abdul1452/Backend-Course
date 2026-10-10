import express from "express";
import { 
    addToWatchlist, 
    updateWatchlistItem, 
    removeFromWatchlist 
} from "../controllers/watchlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { addToWatchlistSchema } from "../validators/watchlistValidatos.js";

const router = express.Router();


router.use(authMiddleware);
router.post("/", validateRequest(addToWatchlistSchema), addToWatchlist);

// {{baseUrl}}/watchlist/:id
router.put("/:id", updateWatchlistItem);

// {{baseUrl}}/watchlist/:id
router.delete("/:id", removeFromWatchlist)



export default router;