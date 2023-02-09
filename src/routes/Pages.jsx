import { Route, Routes } from "react-router-dom";

// Pages
import DashboardPage from "../pages/dashboard/DashboardPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SalesReportPage from "../pages/dashboard/SalesReportPage";
import InventoryPage from "../pages/dashboard/InventoryPage";
import EditInventoryPage from "../pages/dashboard/EditInventoryPage";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";

const Pages = () => {
  const pathsList = [
    { path: "/", component: <DashboardPage /> },
    { path: "/analytics", component: <AnalyticsPage /> },
    { path: "/sales-report", component: <SalesReportPage /> },
    { path: "/inventory", component: <InventoryPage /> },
    { path: "/inventory/edit-inventory", component: <EditInventoryPage /> },
    { path: "/sign-in", component: <SignInPage /> },
    { path: "/sign-up", component: <SignUpPage /> },
  ];

  return (
    <Routes>
      {pathsList.map((item, index) => (
        <Route
          path={`${item.path}`}
          element={item.component}
          key={`page-${index}`}
        />
      ))}
    </Routes>
  );
};

export default Pages;
