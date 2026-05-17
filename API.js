const apiKey = '11c185c2';

const params = new URLSearchParams(window.location.search);
const movieTitle = params.get("filmname");

async function getMovieData(title) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`
    );

    const data = await response.json();

    if (data.Response !== "True") {
      document.getElementById("title").innerText = "Movie not found";
      return;
    }

    // ===== DOM RENDER =====
    document.getElementById("title").innerText =
      `${data.Title} (${data.Year})`;

    document.getElementById("poster").src = data.Poster;

    document.getElementById("genre").innerText = data.Genre;
    document.getElementById("country").innerText = data.Country;
    document.getElementById("language").innerText = data.Language;
    document.getElementById("director").innerText = data.Director;
    document.getElementById("actors").innerText = data.Actors;

    document.getElementById("imdb").innerText =
      `IMDb: ${data.imdbRating}`;

    document.getElementById("votes").innerText =
      `Votes: ${data.imdbVotes}`;

    document.getElementById("seasons").innerText =
      `Seasons: ${data.totalSeasons || "N/A"}`;

    document.getElementById("plot").innerText = data.Plot;

  } catch (error) {
    console.error("API error:", error);
    document.getElementById("title").innerText = "Error loading data";
  }
}

if (movieTitle) {
  getMovieData(movieTitle);
} else {
  document.getElementById("title").innerText =
    "No filmname provided in URL";
}