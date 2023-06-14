"use client";
import React from "react";
export function AddTicketButton({ product }) {
  const store = useStore();
  return (
    <>
      <button
        className='button_confirm'
        style={{ marginTop: "20px" }}
        onClick={addTicket}
      >
        Sepete Ekle
      </button>
    </>
  );
}

function addTicket() {}
