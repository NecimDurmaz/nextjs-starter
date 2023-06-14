import JsonPreview from "@/components/(core)/JsonPreview";
import Link from "next/link";
import React from "react";
export default function MenuItemComponent({ menu }) {
  return (
    <>
      <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
        <Link href={`/${menu.name}`}>{menu.name}</Link>
      </h1>
    </>
  );
}
