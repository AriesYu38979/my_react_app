import React from "react";
import StarRating from "./components/StarRating";
export default function App({title=""}){
    return (
        <>
      <h1>{title}</h1>
    <StarRating totalStars="10" />
</>
    )
}