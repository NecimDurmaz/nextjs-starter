import JsonPreview from "@/components/(core)/JsonPreview";
import ProductItemComponent from "@/components/(product)/product-item/product-item";
import Link from "next/link";
import React from "react";
export default function MenuItemComponent({ menu }) {
  return (
    <>
      <JsonPreview data={menu} />
      <div className='row'>
        {/* {menu.products.map((product) => {
          <div className='col-4'>
            <ProductItemComponent product={product} />
          </div>;
        })} */}
      </div>
    </>
  );
}
