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
