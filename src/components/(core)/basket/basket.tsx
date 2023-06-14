"use client";
import useStore from "@/store";
import React from "react";

export default function BasketContainer() {
  const basket = useStore((state) => state.basket);
  return (
    <div>
      {basket.length > 0 &&
        basket.map((item) => {
          return (
            <div
              style={{
                borderRadius: "10px",
                background: "silver",
                padding: " 10px",
                margin: "10px",
              }}
            >
              <div className='row'>
                <div
                  className='col-12'
                  style={{ fontSize: "20px", color: "red" }}
                >
                  {item.menu}
                </div>
              </div>
              <div className='row'>
                <div className='col-4'>{item.name} </div>
                <div className='col-4'>{item.quantity} Adet </div>
                <div className='col-4'>
                  {item.quantity * item.price} {item.currency}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
