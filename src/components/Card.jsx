import React from "react"

export default function Card(movies){
    console.log(movies)
    return(
        <div className = "cardList">
        <h1>{movies.movie.title}</h1>
        <p>{movies.movie.genre}</p>
        <p>{movies.movie.rating}</p>
        <p>{movies.movie.director}</p>
        <p>{movies.movie.actors}</p>
        </div>
    )
}