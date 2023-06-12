"use client";
import Navbar from "@/components/(core)/navbar";
// import { Head } from "next/document";
import React from "react";

export default function LayoutWrapper({ children, title }) {
  return (
    <>
      <Navbar siteName={title} />
      <div> {children} </div>
    </>
  );
}
