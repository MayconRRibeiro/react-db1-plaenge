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

// Public
const ProductPage = () => <h1>Page - Visualizar Produto</h1>;
// Private
const DashboardPage = () => <h1>Page - Dashboard</h1>;
const SettingsPage = () => <h1>Page - Configuracoes</h1>;

const RequireAuth = ({ children }: PropsWithChildren) => {
  const { authed } = useAuthContext();
  const location = useLocation();

  return authed ? (
    children
  ) : (
    <Navigate to={"/login"} replace state={{ path: location.pathname }} />
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
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

          <Route element={<AdminLayout />}>
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <DashboardPage />
                </RequireAuth>
              }
            />
            <Route
              path="/settings"
              element={
                <RequireAuth>
                  <SettingsPage />
                </RequireAuth>
              }
            />
          </Route>

          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
