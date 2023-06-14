"use client";
import React from "react";
import { JsonView, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import PopupWrapper from "../popup-wrapper";
import JsonPreview from "../JsonPreview";

export default function BasketPreview({ data }: { data: any }) {
  return (
    <>
      <PopupWrapper width={"80%"}>
        <JsonPreview data={data} />
      </PopupWrapper>
    </>
  );
}
