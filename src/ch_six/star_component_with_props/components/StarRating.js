import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"} />
);
const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStarts = 6 }) {
  return <div>{createArray(totalStarts).map((element, i) => <Star key={i} />)}</div>;
}
