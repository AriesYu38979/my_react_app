import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating() {
  return [
    <FaStar color="red" key="101" />,
    <FaStar color="red" key="102" />,
    <FaStar color="red" key="103" />,
    <FaStar color="grey" key="104" />,
    <FaStar color="grey" key="105" />,
  ];
}
