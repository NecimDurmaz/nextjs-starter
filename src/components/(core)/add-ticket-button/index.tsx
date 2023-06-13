"use client";
import { getHotelList } from "@/services/core/api.service";
import React from "react";
export function AddTicketButton() {
  return (
    <>
      <button className='button_confirm' onClick={getHotelList}>
        Bilet Al
      </button>
    </>
  );
}
