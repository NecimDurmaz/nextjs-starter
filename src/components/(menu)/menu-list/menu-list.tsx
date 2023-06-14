import React from "react";
import ProductItemComponent from "@/components/(product)/product-item/product-item";
type Props = {
  selectedMenus: any;
};
export default async function MenuListComponent({ selectedMenus }: Props) {
  return (
    <div className='container'>
      <div className='row'>
        {selectedMenus.map((product) => {
          return (
            <div className='col-4'>
              <ProductItemComponent product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
