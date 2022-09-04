import { useState, useEffect } from "react";
const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

//import { MovieCard } from "../components/MovieCard"

type movie = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: Array<number>,
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  vidieo: boolean,
  vote_average: number,
  vote_count: number,
}

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRateMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    setTopMovies(data.results);
  }

  useEffect(() => {
    const topRateUrl = `${moviesUrl}top_rated?${apiKey}`

    getTopRateMovies(topRateUrl);
  }, [])

  return (
    <div className="container">
      <h2 className="title">The best movies</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie: movie) => <p> {movie.title}</p>)}
      </div>

    </div>
  )
}

export default Home