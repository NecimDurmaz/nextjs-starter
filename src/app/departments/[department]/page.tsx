import JsonPreview from "@/components/(core)/JsonPreview";
import { postRequestFake } from "@/services/core/api.service";
import React from "react";

export default function DepartmentPage({ params }) {
  return <div>DepartmentPage {params.department}</div>;
}

export async function generateStaticParams() {
  const hotelList = await postRequestFake("subdomains");
  console.log(hotelList);
  return hotelList.map((hotel) => {
    return { ...hotel };
  });
}
