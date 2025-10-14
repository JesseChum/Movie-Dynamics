import React from "react"

export default function Card(movie){
    return(
        <div className = "cardList">
        <h1>{movie.title}</h1>
        <p>{movie.genre}</p>
        <p>{movie.rating}</p>
        <p>{movie.director}</p>
        <p>{movie.actors}</p>
        </div>
    )
}