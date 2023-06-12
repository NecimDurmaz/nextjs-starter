"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";

const Popup = (props) => {
  const [propagation, setPropagation] = useState(false);

  return (
    <div
      className={styles.popup_box}
      onClick={() => {
        if (!propagation) {
          props.handleClose();
        }
        setPropagation(false);
      }}
    >
      <div className={styles.box} style={{ width: props.width }}>
        <span className={styles.close_icon} onClick={props.handleClose}>
          x
        </span>
        <span
          onClick={(event) => {
            debugger;
            event.stopPropagation();
            setPropagation(true);
          }}
        >
          {props.children}
        </span>
      </div>
    </div>
  );
};

export default Popup;
