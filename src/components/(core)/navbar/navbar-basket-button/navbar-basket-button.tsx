"use client";
import React, { useState } from "react";

import BasketPreview from "../../BasketPreview";

export default function NavbarBasketButtonComponent({ param }) {
  const [showBasket, setShowBasket] = useState(false);
  // const store = useStore();
  // store.params = param;
  return (
    <div
      onClick={() => {
        setShowBasket(!showBasket);
      }}
    >
      {showBasket && <BasketPreview data={{}} />}
      Basket
    </div>
  );
}
