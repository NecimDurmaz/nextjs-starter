import JsonPreview from "@/components/(core)/JsonPreview";
import LayoutWrapper from "@/containers/layout/LayoutWrapper";
import { getProductList } from "@/services/core/api.service";
import { groupByProduct } from "@/services/app/product.service";
import React from "react";
import DepartmentListComponent from "@/components/(department)/department-list/department-list";
import MenuListComponent from "@/components/(menu)/menu-list/menu-list";

export default async function DepartmentPage({ params }) {
  let departments = await getProductList();
  let newDepartments = await groupByProduct(departments);
  const filterDepartments = newDepartments.find((department) => {
    return department.site == params.site;
  });
  const menus = filterDepartments.departments.find((department) => {
    return department.department == params.department;
  });

  return (
    <LayoutWrapper
      title={undefined}
      favicon={undefined}
      primaryColor={undefined}
    >
      <MenuListComponent menus={menus.products} />
      {/* <DepartmentListComponent departments={departments} /> */}
    </LayoutWrapper>
  );
}
