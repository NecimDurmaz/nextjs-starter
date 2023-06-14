import React from "react";

import style from "./style.module.scss";
import DepartmentItemComponent from "../department-item/department-item";
import JsonPreview from "@/components/(core)/JsonPreview";
type Props = {
  departments: any;
};
export default async function DepartmentListComponent({ departments }: Props) {
  return (
    <div className='container'>
      {departments.products.map((department, index) => {
        return <DepartmentItemComponent department={department} />;
      })}
    </div>
  );
}
