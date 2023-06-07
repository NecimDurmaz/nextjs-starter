"use client";
import React from "react";
import { getDataBooking } from "@/app/api/params/param";

export function AddTicketButton() {
  return (
    <>
      <button onClick={getDataBooking} className='button_confirm'>
        Bilet Al
      </button>
      {/* {isOpen && (
                <Popup width={'50%'} handleClose={togglePopup}>
                    <SelectedTicket />
                </Popup>
            )} */}
    </>
  );
}
