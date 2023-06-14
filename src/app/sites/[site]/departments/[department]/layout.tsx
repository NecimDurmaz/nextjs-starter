import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/variables.module.scss";
import "@/styles/global.scss";
import "@/styles/reset.scss";
import { Roboto } from "next/font/google";
import { getProductList } from "@/services/core/api.service";

const RootLayout = async ({ children }) => {
  return <>{children}</>;
};

export default RootLayout;
export async function generateStaticParams({ params }) {
  const productList = await getProductList();
  return productList.map((product) => {
    return { site: params.site, department: product.department };
  });
}
