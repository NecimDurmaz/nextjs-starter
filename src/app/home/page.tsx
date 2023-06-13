import LayoutWrapper from "@/containers/layout/LayoutWrapper";
import { Metadata } from "next";
import React from "react";

import style from "./style.module.scss";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  return (
    <>
      <LayoutWrapper title='Home' favicon={undefined} primaryColor={undefined}>
        <div className={style.wrapper}>
          <div className={style.container}>
            <div className={style["card"]}>
              <h1 className={style["title"]}>Home </h1>
              <p className={style["subtitle"]}></p>
              <button className={style["btn"]}>Get Started</button>
            </div>
            <div className={style["blob"]}></div>
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
