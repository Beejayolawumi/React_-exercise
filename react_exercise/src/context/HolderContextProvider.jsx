import { createContext, useState } from "react";

export const HolderContext = createContext();

const HolderContextProvider = ({ children }) => {
  const [isCardName, setIsCardName] = useState(false);
  const [isCardNumber, setIsCardNumber] = useState(false);
  const [isDate, setIsDate] = useState(false);

  const valueToBePassed = {
    isCardName: isCardName,
    setIsCardName: setIsCardName,
    isCardNumber: isCardNumber,
    setIsCardNumber: setIsCardNumber,
    isDate: isDate,
    setIsDate: setIsDate,
  };

  return (
    <HolderContext.Provider value={valueToBePassed}>
      {children}
    </HolderContext.Provider>
  );
};

export default HolderContextProvider;
