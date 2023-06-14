import JsonPreview from "@/components/(core)/JsonPreview";
import LayoutWrapper from "@/containers/layout/LayoutWrapper";
import React from "react";

export default async function MenuPage({ params }) {
  let menuList = await getMenu();
  return (
    <LayoutWrapper
      title={undefined}
      favicon={undefined}
      primaryColor={undefined}
    >
      <div>
        DepartmentPage {params.menu} <JsonPreview data={menuList} />{" "}
      </div>
    </LayoutWrapper>
  );
}
export async function generateStaticParams({ params }) {
  const menuList = [{ menu: "menu1" }, { menu: "menu2" }];

  return menuList.map((menu) => {
    return {
      site: params.site,
      department: params.department,
      menu: menu.menu,
    };
  });
}

async function getMenu() {
  var urlencoded = new URLSearchParams();
  var menus = [
    {
      id: 1,
      name: "menu1",
      description: "menu1",
      price: 10,
    },
    {
      id: 1,
      name: "menu1",
      description: "menu1",
      price: 10,
    },
    {
      id: 1,
      name: "menu1",
      description: "menu1",
      price: 10,
    },
  ];
  var requestOptions = {
    method: "POST",
    body: urlencoded,
    redirect: "follow",
  };
  return await fetch("https://postman-echo.com/post", {
    method: "POST",
    body: JSON.stringify(menus),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.text())
    .then((response) => {
      return JSON.parse(response).data;
    })
    .catch((error) => console.log("error", error));
}
