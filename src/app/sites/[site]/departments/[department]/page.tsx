import JsonPreview from "@/components/(core)/JsonPreview";
import LayoutWrapper from "@/containers/layout/LayoutWrapper";
import { getProductList } from "@/services/core/api.service";
import {
  getDepartmentProducts,
  groupByProduct,
} from "@/services/app/product.service";
import React from "react";
import DepartmentListComponent from "@/components/(department)/department-list/department-list";
import MenuListComponent from "@/components/(menu)/menu-list/menu-list";

export default async function DepartmentPage({ params }) {
  const menus = await getDepartmentProducts(params.site, params.department);
  // menus icindeki product icindeki ayni menus icindeki productlari grupla

  return (
    <LayoutWrapper
      title={undefined}
      favicon={undefined}
      primaryColor={undefined}
    >
      {/* <JsonPreview data={menus} /> */}
      <DepartmentListComponent menus={menus} />
      {/* <MenuListComponent menus={menus.products} /> */}
    </LayoutWrapper>
  );
}
