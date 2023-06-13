import { postRequestFake } from "@/services/core/api.service";
import React from "react";

export default function MenuPage() {
  return <div>MenuPage</div>;
}

export async function generateStaticParams() {
  const hotelList = await postRequestFake("subdomains");

  return hotelList.map((hotel) => {
    return { ...hotel };
  });
}
