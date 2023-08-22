import React from "react";

import { LoadBtn } from "./LoadMoreBtn.style";

const LoadMoreBtn = ({ setOffset }) => {
  const handleClick = () => {
    setOffset((prev) => prev += 12);
  };

  return <LoadBtn onClick={handleClick}>Load More</LoadBtn>;
};

export default LoadMoreBtn;
