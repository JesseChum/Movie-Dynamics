import React from "react"

export default function Card(movies){
    let actors = ""
    movies.movie.actors.forEach(actor => {
        actors += actor + ", "
    });
    actors = actors.substring(0, actors.length - 2)

    console.log(movies)
    return(
        <div className = "cardList">
        <img src = {movies.movie.poster}/>
        <h1>{movies.movie.title}</h1>
        <p>{movies.movie.genre}</p>
        <p>{movies.movie.rating}</p>
        <p>{movies.movie.director}</p>
        <p>{actors}</p>
        </div>
    )
}