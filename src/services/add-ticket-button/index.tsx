"use client";
import { getData } from "@/app/api/params/param";
import React from "react";
export function AddTicketButton() {
  return (
    <>
      <button onClick={getData} className='button_confirm'>
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
