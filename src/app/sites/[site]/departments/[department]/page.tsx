import JsonPreview from "@/components/(core)/JsonPreview";
import LayoutWrapper from "@/containers/layout/LayoutWrapper";
import {
  getHotelListPostMan,
  getProductList,
} from "@/services/core/api.service";
import {
  getDepartmentProducts,
  groupByProduct,
} from "@/services/app/product.service";
import React from "react";
import DepartmentListComponent from "@/components/(department)/department-list/department-list";
import MenuListComponent from "@/components/(menu)/menu-list/menu-list";
import { ResolvingMetadata, Metadata } from "next";
import Link from "next/link";

// export async function generateMetadata(
//   { params, searchParams }: any,
//   parent?: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const subdomain = params.site;

//   const department = await getDepartmentProducts(
//     params.site,
//     params.department
//   );
//   if (!department) return { title: "404" };

//   return {
//     title: department.department,
//     description: department.department,
//     openGraph: {
//       images: [
//         "https://www.elektraweb.com/wp-content/uploads/2019/06/favicon.ico",
//       ],
//     },
//   };
// }

export default async function DepartmentPage({ params }) {
  const departments = await getDepartmentProducts(
    params.site,
    params.department
  );

  return (
    <LayoutWrapper
      title={undefined}
      favicon={undefined}
      primaryColor={undefined}
    >
      <DepartmentListComponent departments={departments} />
    </LayoutWrapper>
  );
}
