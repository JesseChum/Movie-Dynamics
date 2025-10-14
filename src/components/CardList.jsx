import React from "react"
import Card from "./Card.jsx"

export default function CardList({movies}){
    return(
        <div className = "card">
            {movies.map((movie) => (
                <Card movie = {movie}/>
            ))}
        </div>
    )
}