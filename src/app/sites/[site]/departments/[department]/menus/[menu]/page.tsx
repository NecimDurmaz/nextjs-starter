import JsonPreview from "@/components/(core)/JsonPreview";
import LayoutWrapper from "@/containers/layout/LayoutWrapper";
import { postRequestFake } from "@/services/core/api.service";
import React from "react";

export default function MenuPage({ params }) {
  return (
    <LayoutWrapper
      title={undefined}
      favicon={undefined}
      primaryColor={undefined}
    >
      <div>
        DepartmentPage {params.menu} <JsonPreview data={params} />{" "}
      </div>
    </LayoutWrapper>
  );
}

export async function generateStaticParams() {
  const hotelList = await postRequestFake("subdomains");

  return hotelList.map((hotel) => {
    return { ...hotel };
  });
}
