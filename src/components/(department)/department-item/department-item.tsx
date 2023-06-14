import JsonPreview from "@/components/(core)/JsonPreview";
import Link from "next/link";
import React from "react";
export default function DepartmentItemComponent({ department }) {
  return (
    <>
      <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
        <Link href={`/${department.department}`}>{department.department}</Link>
      </h1>
    </>
  );
}
