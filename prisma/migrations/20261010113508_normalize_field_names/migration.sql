ALTER TABLE "Movie"
RENAME COLUMN "relaseYear" TO "releaseYear";

ALTER TABLE "Movie"
RENAME COLUMN "createdBY" TO "createdBy";

ALTER TABLE "WatchlistItem"
RENAME COLUMN "userID" TO "userId";

ALTER INDEX "WatchlistItem_userID_movieId_key"
RENAME TO "WatchlistItem_userId_movieId_key";

ALTER TABLE "Movie"
RENAME CONSTRAINT "Movie_createdBY_fkey"
TO "Movie_createdBy_fkey";

ALTER TABLE "WatchlistItem"
RENAME CONSTRAINT "WatchlistItem_userID_fkey"
TO "WatchlistItem_userId_fkey";
