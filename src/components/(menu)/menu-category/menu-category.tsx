import JsonPreview from "@/components/(core)/JsonPreview";
import Link from "next/link";
import React from "react";

export default function MenuCategoryComponent({ menus }) {
  return (
    <>
      {menus.products.map((product) => {
        return (
          <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
            <Link href={`/${product.department}/${product.menu}`}>
              {product.menu}
            </Link>
          </h1>
        );
      })}
    </>
  );
}
