import { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";

const CardInfoContext = createContext(null);

function CardProvider({ children }) {
  const [cardInfo, setCardInfo] = useState({
    cardHolderName: null,
    cardNumber: null,
    expirationDate: null,
    CVC: null,
  });
  const { subtotal } = useContext(CartContext);

  function handleSubmit() {
    // event.preventDefault();
    console.log(
      `持卡人姓名：${cardInfo.cardHolderName}\n卡號：${cardInfo.cardNumber}\n有效期限：${cardInfo.expirationDate}\nCVC：${cardInfo.CVC}\n小計：${subtotal}`
    );
  }

  function handleChange(event, changedItem) {
    setCardInfo((currentInfo) => ({
      ...currentInfo,
      [changedItem]: event.target.value,
    }));
  }

  return (
    <CardInfoContext.Provider value={{ handleChange, cardInfo, handleSubmit }}>
      {children}
    </CardInfoContext.Provider>
  );
}

export { CardInfoContext, CardProvider };
