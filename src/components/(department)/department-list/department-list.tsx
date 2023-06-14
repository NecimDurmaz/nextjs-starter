import React from "react";

import style from "./style.module.scss";
import DepartmentItemComponent from "../department-item/department-item";
import JsonPreview from "@/components/(core)/JsonPreview";
type Props = {
  menus: any;
};
export default async function DepartmentListComponent({ menus }: Props) {
  return (
    <div className='container'>
      {menus.products.map((department, index) => {
        return <DepartmentItemComponent department={department} />;
      })}
    </div>
  );
}
