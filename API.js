const apiKey = '11c185c2'; 
const movieTitle = 'Inception';

async function getMovieData(title) {
  try {
    const response = await fetch(`https://omdbapi.com{title}&apikey=${apiKey}`);
    const data = await response.json();

    if (data.Response === "True") {
      console.log("Назва:", data.Title);
      console.log("Рік:", data.Year);
      console.log("Рейтинг IMDB:", data.imdbRating);
      console.log("Сюжет:", data.Plot);
    } else {
      console.error("Помилка:", data.Error);
    }
  } catch (error) {
    console.error("Сталася помилка при запиті:", error);
  }
}

getMovieData(movieTitle);
