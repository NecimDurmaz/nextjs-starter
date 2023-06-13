import React from "react";
import style from "./not-found.module.scss";
export default function bulunamadi() {
  return (
    <div className={style.body}>
      <div className={style.mars}></div>
      <img
        src='https://assets.codepen.io/1538474/404.svg'
        className={style["logo-404"]}
      />
      <img
        src='https://assets.codepen.io/1538474/meteor.svg'
        className={style["meteor"]}
      />
      <p className={style["title"]}>Oh no!!</p>
      <p className={style["subtitle"]}>
        You’re either misspelling the URL <br /> or requesting a page that's no
        longer here.
      </p>
      <div className={style["btn-back-wrapper"]}>
        <a className={style["btn-back"]}>Back to previous page</a>
      </div>
      <img
        src='https://assets.codepen.io/1538474/astronaut.svg'
        className={style["astronaut"]}
      />
      <img
        src='https://assets.codepen.io/1538474/spaceship.svg'
        className={style["spaceship"]}
      />
    </div>
  );
}
