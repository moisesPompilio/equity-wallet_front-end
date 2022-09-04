import { Link } from "react-router-dom";

import { FaStar } from 'react-icons/fa';
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
interface MovieCardProps {
    movie?: movie;
    showLink: boolean;
}

const imageUrl = import.meta.env.VITE_IMG;

export const MovieCard = ({ movie, showLink = true }: MovieCardProps) => {


    return
    <div className="movie-card">
        img
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
};

