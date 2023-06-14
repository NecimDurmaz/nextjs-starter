"use client";
import useStore from "@/store";
import React, { useState } from "react";
import JsonPreview from "../../JsonPreview";

export default function NavbarBasketButtonComponent() {
  const [showBasket, setShowBasket] = useState(false);
  const store = useStore();

  return (
    <div
      onClick={() => {
        setShowBasket(!showBasket);
      }}
    >
      {showBasket && <JsonPreview data={store.basket} />}
      Basket
    </div>
  );
}
