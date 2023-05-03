import React from "react";
import MovieList from "./MovieList";
import classes from "./Movies.module.css";
import { useReducer, useEffect, useCallback } from "react";
import { ACTION_TYPES } from "../hooks/movieActionTypes";
import { INITIAL_STATE, movieReducer } from "../hooks/movieReducer";

const Movies = () => {
  const [state, dispatch] = useReducer(movieReducer, INITIAL_STATE);

  const fetchMovieHandler = useCallback(async () => {
    dispatch({ type: ACTION_TYPES.FETCH_MOVIES });
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      dispatch({
        type: ACTION_TYPES.FETCH_MOVIES_SUCCESS,
        payload: transformedMovies,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: ACTION_TYPES.FETCH_MOVIES_FAILURE });
    }
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>React Movies</h1>
      <button className={classes["fetch-btn"]} onClick={fetchMovieHandler}>
        {state.loading ? "Loading..." : "Fetch Movies"}
      </button>
      {!state.error && <MovieList movies={state.movies} />}
      {state.error && <p className={classes.error}>Something went wrong!</p>}
      {!state.loading && !state.error && state.movies.length === 0 && (
        <p className={classes["not-found"]}>No Movies Found!</p>
      )}
    </div>
  );
};

export default Movies;
