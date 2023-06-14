import Navbar from "@/components/(core)/navbar";
import React from "react";

export default function LayoutWrapper({
  children,
  title,
  favicon,
  primaryColor,
}) {
  return (
    <>
      <div> {children} </div>
    </>
  );
}
