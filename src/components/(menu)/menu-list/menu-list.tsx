import React from "react";

import style from "./style.module.scss";
import DepartmentItemComponent from "../menu-item/menu-item";
import JsonPreview from "@/components/(core)/JsonPreview";
import MenuItemComponent from "../menu-item/menu-item";
type Props = {
  menus: any;
};
export default async function MenuListComponent({ menus }: Props) {
  return (
    <div className='container'>
      {menus.map((menu, index) => {
        return <MenuItemComponent menu={menu} />;
      })}
    </div>
  );
}
