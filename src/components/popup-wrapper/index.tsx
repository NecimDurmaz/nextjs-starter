"use client";

import React, { useState } from "react";
import Popup from "../popup";
const PopupWrapper = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && (
        <Popup width={props.width} handleClose={togglePopup}>
          {props.children}
        </Popup>
      )}
    </>
  );
};

export default PopupWrapper;
