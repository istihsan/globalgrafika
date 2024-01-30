import { useState, useEffect } from "react";

const useCalculateTotalOrder = (cartData, additionalFees, shippingCost) => {
  const [totalOrder, setTotalOrder] = useState(0);
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);

  useEffect(() => {
    const calculatedTotalItemsPrice = cartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const calculatedTotalOrder =
      calculatedTotalItemsPrice + additionalFees + shippingCost;

    setTotalItemsPrice(calculatedTotalItemsPrice);
    setTotalOrder(calculatedTotalOrder);
  }, [cartData, additionalFees, shippingCost]);

  return { totalOrder, totalItemsPrice };
};

export default useCalculateTotalOrder;
