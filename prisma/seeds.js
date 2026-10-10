import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

const userId = "f2ff886f-3358-4f65-bd1d-2ef9543497db";

const movies = [
    {
        title: "The Shawshank Redemption",
        overview: "A wrongly imprisoned banker builds an unlikely friendship and keeps hope alive while serving his sentence.",
        releaseYear: 1994,
        genres: ["Drama"],
        runtime: 142,
        posterUrl: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        createdBy: userId,
    },
    {
        title: "The Godfather",
        overview: "The reluctant son of a powerful crime family is drawn into the dangerous business of protecting its legacy.",
        releaseYear: 1972,
        genres: ["Drama", "Crime"],
        runtime: 175,
        posterUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        createdBy: userId,
    },
    {
        title: "The Dark Knight",
        overview: "A masked vigilante faces a criminal mastermind who pushes Gotham and its defenders toward chaos.",
        releaseYear: 2008,
        genres: ["Action", "Crime", "Drama"],
        runtime: 152,
        posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        createdBy: userId,
    },
    {
        title: "Pulp Fiction",
        overview: "Several connected stories of criminals, chance encounters, and unexpected consequences unfold across Los Angeles.",
        releaseYear: 1994,
        genres: ["Crime", "Drama"],
        runtime: 154,
        posterUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        createdBy: userId,
    },
    {
        title: "Inception",
        overview: "A specialist who enters dreams is offered a chance to regain his old life by planting an idea in a target's mind.",
        releaseYear: 2010,
        genres: ["Action", "Science Fiction", "Thriller"],
        runtime: 148,
        posterUrl: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        createdBy: userId,
    },
    {
        title: "The Matrix",
        overview: "A computer programmer discovers that the world he knows is an artificial reality and joins a fight for human freedom.",
        releaseYear: 1999,
        genres: ["Action", "Science Fiction"],
        runtime: 136,
        posterUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        createdBy: userId,
    },
    {
        title: "Interstellar",
        overview: "A former pilot joins a mission through a mysterious passage in space to search for a future home for humanity.",
        releaseYear: 2014,
        genres: ["Adventure", "Drama", "Science Fiction"],
        runtime: 169,
        posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        createdBy: userId,
    },
    {
        title: "Spirited Away",
        overview: "A young girl must work in a mysterious spirit world to rescue her transformed parents and return home.",
        releaseYear: 2001,
        genres: ["Animation", "Fantasy", "Adventure"],
        runtime: 125,
        posterUrl: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        createdBy: userId,
    },
    {
        title: "Parasite",
        overview: "A struggling family gradually becomes involved with a wealthy household, exposing a sharp divide between two worlds.",
        releaseYear: 2019,
        genres: ["Comedy", "Thriller", "Drama"],
        runtime: 133,
        posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        createdBy: userId,
    },
    {
        title: "Mad Max: Fury Road",
        overview: "A drifter and a determined rebel leader race across a wasteland while escaping a brutal tyrant.",
        releaseYear: 2015,
        genres: ["Action", "Adventure", "Science Fiction"],
        runtime: 121,
        posterUrl: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
        createdBy: userId,
    },
];

const main = async () => {
    await prisma.movie.createMany({ data: movies });
    console.log(`Seeded ${movies.length} movies.`);
};

main()
    .catch((error) => {
        console.error("Movie seed failed:", error);
        process.exitCode = 1;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
