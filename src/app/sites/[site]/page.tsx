import JsonPreview from "@/components/(core)/JsonPreview";
import DepartmentListComponent from "@/components/(department)/department-list/department-list";
import ProductList from "@/components/(product)/product-list/product-list";
import LayoutWrapper from "@/containers/layout/LayoutWrapper";
import { groupByProduct } from "@/services/app/product.service";
import {
  getHotelListPostMan,
  getProductList,
} from "@/services/core/api.service";
import { ResolvingMetadata, Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
type Props = {
  params: { site: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const subdomain = params.site;

  const hotelList = await getHotelListPostMan();
  const hotel = hotelList.find((hotel) => {
    return hotel.site == params.site;
  });

  if (!hotel) return { title: "404" };
  return {
    title: hotel.hotelName,
    description: hotel.hotelName,
    openGraph: {
      images: [
        "https://www.elektraweb.com/wp-content/uploads/2019/06/favicon.ico",
      ],
    },
  };
}

export default async function SlugPage({ params }: Props) {
  const hotelList = await getHotelListPostMan();

  const hotel = hotelList.find((hotel) => {
    return hotel.site == params.site;
  });
  // const deneme = await getHotelList();
  if (!hotel) {
    return notFound();
  }

  let departments = await getProductList();
  let newDepartments = await groupByProduct(departments);
  const filterDepartments = newDepartments.find((department) => {
    return department.site == params.site;
  })?.departments;

  return (
    <>
      <LayoutWrapper
        title={hotel?.hotelName}
        favicon={hotel?.FAVICON}
        primaryColor={hotel?.primaryColor}
      >
        {filterDepartments.map((department) => {
          return (
            <Link href={"/" + department.department}>
              <h1 style={{ fontSize: "50px" }}> {department.department} </h1>
            </Link>
          );
        })}
      </LayoutWrapper>
    </>
  );
}
