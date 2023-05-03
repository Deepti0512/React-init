import React from 'react'
import classes from './Movie.module.css'

const Movie = (props) => {
  return (
    <li className={classes.movie}>
        <h2 className={classes.title}>{props.title}</h2>
        <h3 className={classes['release-date']}>{props.releaseDate}</h3>
        <p className={classes.description}>{props.openingText}</p>
    </li>
  )
}

export default Movie
