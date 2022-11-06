import React from "react";
import StarRating from "./components/StarRating";
export default function App() {
  return (
    <div>
        <h1> Star components with state</h1>
      <StarRating totalStars="10" />
    </div>
  );
}
