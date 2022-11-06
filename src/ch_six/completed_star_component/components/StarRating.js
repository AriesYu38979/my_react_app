import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSeleted = (f) => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSeleted}/>
);
const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStarts = 5 }) {
  const [selectedStarts, setSelectedStarts] = useState(0);
  return (
    <div>
      {createArray(totalStarts).map((element, i) => (
        <Star
          key={30 + i}
          selected={i < selectedStarts}
          onSeleted={() => {
            setSelectedStarts(i + 1);
          }}
        />
      ))}
      <p>
        {selectedStarts} of {totalStarts} stars
      </p>
    </div>
  );
}
