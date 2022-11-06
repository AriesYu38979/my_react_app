import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"} />
);
const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStarts = 5 }) {
  const [selectedStarts] = useState(3);
  return (
    <div>
      {createArray(totalStarts).map((element, i) => (
        <Star key={i} selected={i < selectedStarts} />
      ))}
      <p>
        {selectedStarts} of {totalStarts} stars
      </p>
    </div>
  );
}
