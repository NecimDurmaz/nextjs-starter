import React from "react";
import style from "./style.module.scss";
import CoreImage from "@/components/(core)/CoreImage";
import { DefaultImage } from "@/model/DefaultImage.model";
import { AddTicketButton } from "@/components/(core)/add-ticket-button";
export default function ProductItemComponent({ product }) {
  // const image: DefaultImage = {
  //   src: product.image,
  //   fill: true,
  //   alt: product.name,
  // };
  return (
    <>
      <div className='col-12 col-md-6 col-lg-4'>
        <div className={style.card}>
          <div className={style["card-text"]}>
            <p className={style["card-meal-type"]}>{product.menu} </p>
            <h2 className={style["card-title"]}>{product.name} </h2>
            <p className={style["card-body"]}>{product.description}</p>
            <AddTicketButton product={product} />
          </div>
          <div className={style["card-price"]}>
            {product.price} {product.currency}
          </div>
        </div>
      </div>
    </>
  );
}
