import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/variables.module.scss";
import "@/styles/global.scss";
import "@/styles/reset.scss";
import { getDepartmentProducts } from "@/services/app/product.service";

// type Props = {
//   params: { site: string; department: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

const RootLayout = async ({ children }) => {
  return <>{children}</>;
};

export default RootLayout;

export async function generateStaticParams({ params }) {
  const departmentsByMenus = await getDepartmentProducts(params.site);
  return departmentsByMenus.departments.map((department) => {
    return { site: params.site, department: department.department };
  });
}
