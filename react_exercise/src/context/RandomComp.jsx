import { useContext } from "react";
import { HolderContext } from "./HolderContextProvider";
import React from "react";

const RandomComp = () => {
  const {
    isCardName,
    setIsCardName,
    isCardNumber,
    setIsCardNumber,
    isDate,
    setIsDat,
  } = useContext(HolderContext);

  return (
    <div>
      {isCardName === setIsCardName}
      {isCardNumber === setIsCardNumber}
      {isDate === setIsDat}
    </div>
  );
};

export default RandomComp;
