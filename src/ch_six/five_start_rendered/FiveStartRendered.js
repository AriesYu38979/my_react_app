import React from "react";
import StarRating from "./components/StarRating";

export default function App({ title = "" }) {
  return (
    <div>
      <h1>{title}</h1>
      <StarRating />
    </div>
  );
}
