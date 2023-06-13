import JsonPreview from "@/components/(core)/JsonPreview";
import LayoutWrapper from "@/containers/layout/LayoutWrapper";
import { postRequestFake } from "@/services/core/api.service";
import React from "react";

export default function DepartmentPage({ params }) {
  return (
    <LayoutWrapper
      title={undefined}
      favicon={undefined}
      primaryColor={undefined}
    >
      <div>
        DepartmentPage {params.department} <JsonPreview data={params} />{" "}
      </div>
    </LayoutWrapper>
  );
}

export async function generateStaticParams() {
  const hotelList = await postRequestFake("subdomains");
  console.log(hotelList);
  return hotelList.map((hotel) => {
    return { ...hotel };
  });
}
