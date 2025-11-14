import { StrictMode, type PropsWithChildren } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router";

import "./index.css";

import HomePage from "@/pages/home-page";
import { CartPage } from "@/pages/cart-page";
import { WishListPage } from "@/pages/wishlist-page";
import { ProductsListPage } from "@/pages/products-list-page";
import { StoreLayout } from "@/layouts/store-layout";
import { AuthProvider, useAuthContext } from "@/context/auth.context";
import { LoginPage } from "@/pages/login-page";
import { AdminLayout } from "@/layouts/admin-layout";
import { AdminProductsPage } from "@/pages/admin-products-page";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AdminNewProductPage } from "@/pages/admin-new-product-page";

// Public
const ProductPage = () => <h1>Page - Visualizar Produto</h1>;
// Private
const DashboardPage = () => <h1>Page - Dashboard</h1>;
const OrdersPage = () => <h1>Page - Pedidos</h1>;
const CustomersPage = () => <h1>Page - Clientes</h1>;
const ReportsPage = () => <h1>Page - Relatórios</h1>;
const SettingsPage = () => <h1>Page - Configurações</h1>;

const RequireAuth = ({ children }: PropsWithChildren) => {
  const { user } = useAuthContext();
  const location = useLocation();

  return user?.isAdmin ? (
    children
  ) : (
    <Navigate to={"/login"} replace state={{ path: location.pathname }} />
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routes>
            <Route element={<StoreLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/products-list" element={<ProductsListPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/wish-list" element={<WishListPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />

            <Route
              element={
                <RequireAuth>
                  <AdminLayout />
                </RequireAuth>
              }
            >
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/create-product" element={<AdminNewProductPage />} />
              <Route path="/products" element={<AdminProductsPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/customers" element={<CustomersPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>

            <Route path="*" element={<Navigate to={"/"} replace />} />
          </Routes>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
