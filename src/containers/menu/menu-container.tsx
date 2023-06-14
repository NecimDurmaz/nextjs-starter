import MenuCategoryComponent from "@/components/(menu)/menu-category/menu-category";
import MenuListComponent from "@/components/(menu)/menu-list/menu-list";
import React from "react";

export default function MenuContainer({ menus, selectedMenus }) {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4'>
            <h1 style={{ fontSize: "100px", color: "red" }}>Menus</h1>
            <hr />
            <MenuCategoryComponent menus={menus} />
          </div>
          <div className='col-8'>
            <MenuListComponent selectedMenus={selectedMenus} />
          </div>
        </div>
      </div>
    </>
  );
}
