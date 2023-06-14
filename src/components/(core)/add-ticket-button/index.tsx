"use client";
import useStore from "@/store";
import React from "react";
export function AddTicketButton({ product }) {
  const store = useStore();
  return (
    <>
      <button
        className='button_confirm'
        style={{ marginTop: "20px" }}
        onClick={() => {
          store.addBasket(product);
        }}
      >
        Sepete Ekle
      </button>
    </>
  );
}

function addTicket() {}
