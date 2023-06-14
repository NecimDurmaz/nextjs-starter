import JsonPreview from "@/components/(core)/JsonPreview";
import LayoutWrapper from "@/containers/layout/LayoutWrapper";
import MenuContainer from "@/containers/menu/menu-container";
import { getDepartmentProducts } from "@/services/app/product.service";
import { getHotelListPostMan } from "@/services/core/api.service";
import { ResolvingMetadata, Metadata } from "next";
import React from "react";

type Props = {
  params: { site: string; department: string; menu: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const menus = await getDepartmentProducts(params.site, params.department);
  const product = menus.products.find((p) => p.menu === params.menu);
  if (!product) return { title: "404" };
  return {
    title: product.menu + " | " + params.site,
    description: product.menu + params.site,
    openGraph: {
      images: [
        "https://www.elektraweb.com/wp-content/uploads/2019/06/favicon.ico",
      ],
    },
  };
}

export default async function MenuPage({ params }) {
  const menus = await getDepartmentProducts(params.site, params.department);
  const selectedMenus = menus.products.filter((p) => p.menu === params.menu);
  return (
    <LayoutWrapper
      title={undefined}
      favicon={undefined}
      primaryColor={undefined}
    >
      {/* <h1> {product.name}</h1> */}
      <MenuContainer menus={menus} selectedMenus={selectedMenus} />
      {/* <JsonPreview data={menus} /> */}
    </LayoutWrapper>
  );
}

export async function generateStaticParams({ params }) {
  const menus = await getDepartmentProducts(params.site, params.department);
  const product = menus.products.find((p) => p.menu === params.menu);
  return menus.products.map((menu) => {
    return {
      site: params.site,
      department: params.department,
      menu: menu.menu,
    };
  });
}
