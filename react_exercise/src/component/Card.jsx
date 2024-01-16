import { useContext } from "react";

import { HolderContext } from "../context/HolderContextProvider";

const Card = () => {
  const { isCardName, isCardNumber, isDate } = useContext(HolderContext);

  const handleChange = (e) => {
    e.preventDefault();
    if (isCardName && isCardNumber && isDate) {
      const person = {
        id: new Date().getTime().toString(),
        isCardName,
        isCardNumber,
        isDate,
      };
    }

    return (
      <article>
        <form onChange={handleChange}>
          <div>
            <label htmlFor="cardName">Card Name : </label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={isCardName}
              onChange={(e) => isCardName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cardNumber">Card Number : </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={isCardNumber}
              onChange={(e) => isCardNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="isDate">Date : </label>
            <input
              type="text"
              id="isDate"
              name="isDate"
              value={isDate}
              onChange={(e) => isDate(e.target.value)}
            />
          </div>
        </form>
        {Card.map((person) => {
          const { id, isCardName, isCardNumber, isDate } = person;
          return (
            <div key={id}>
              <h3>{isCardName}</h3>
              <h3>{isCardNumber}</h3>
              <h3>{isDate}</h3>
            </div>
          );
        })}
      </article>
    );
  };
};
export default Card;
