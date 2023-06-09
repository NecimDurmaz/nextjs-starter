"use client";
import React from "react";
import { JsonView, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import PopupWrapper from "../popup-wrapper";

export default function JsonPreview({ data }: { data: any }) {
  return (
    <>
      <PopupWrapper width={"80%"}>
        <JsonView
          data={data}
          shouldInitiallyExpand={(level) => true}
          style={defaultStyles}
        />
      </PopupWrapper>
    </>
  );
}
