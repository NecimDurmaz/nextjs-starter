import React from "react";

import style from "./style.module.scss";
import ProductItemComponent from "../product-item/product-item";
type Props = {
  hotelId: string;
};
export default async function ProductListComponent({ hotelId }: Props) {
  const productList = [];
  return (
    <div className='container'>
      <div className={`${style.ProductListMain} row`}>
        {productList.map((product) => {
          return <ProductItemComponent key={product.productId} {...product} />;
        })}
      </div>
    </div>
  );
}
