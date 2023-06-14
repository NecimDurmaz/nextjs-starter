import { getProductList } from "../core/api.service";

export function groupByProduct(productList: any) {
  //productList altindaki tum urunleri siteye gore gruplayip sitenin alt dizisi olarak departmanlara gore gruplayip array olarak dondurur

  let groupedProductList = [];
  productList.forEach((product) => {
    let siteIndex = groupedProductList.findIndex(
      (groupedProduct) => groupedProduct.site === product.site
    );
    if (siteIndex === -1) {
      groupedProductList.push({
        site: product.site,
        departments: [
          {
            department: product.department,
            products: [product],
          },
        ],
      });
    } else {
      let departmentIndex = groupedProductList[siteIndex].departments.findIndex(
        (department) => department.department === product.department
      );
      if (departmentIndex === -1) {
        groupedProductList[siteIndex].departments.push({
          department: product.department,
          products: [product],
        });
      } else {
        groupedProductList[siteIndex].departments[
          departmentIndex
        ].products.push(product);
      }
    }
  });

  return groupedProductList;
}

export async function getDepartmentProducts(site: string, department?: string) {
  let departments = await getProductList();

  let groupDepartments = await groupByProduct(departments);
  const filterDepartments = groupDepartments.find((groupDepartment) => {
    return groupDepartment.site == site;
  });
  if (department) {
    const menus = filterDepartments.departments.find((groupDepartment) => {
      return groupDepartment.department == department;
    });

    return menus;
  } else {
    return filterDepartments;
  }
}
