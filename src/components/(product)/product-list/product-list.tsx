import { postRequestFake } from "@/services/core/api.service";
import React from "react";

import style from "./style.module.scss";
import ProductItemComponent from "../product-item/product-item";
type Props = {
  hotelId: string;
};
export default async function ProductListComponent({ hotelId }: Props) {
  const productList = await getProductList(hotelId);
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

async function getProductList(hotelId: string) {
  const productList = await postRequestFake("products?hotelId=" + hotelId);
  return productList;
}
