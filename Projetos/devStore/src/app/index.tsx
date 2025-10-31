import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import "./index.css";

import HomePage from "@/pages/home-page";
import { CartPage } from "@/pages/cart-page";
import { WishListPage } from "@/pages/wishlist-page";
import { ProductsListPage } from "@/pages/products-list-page";
import { StoreLayout } from "@/layouts/store-layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<StoreLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wish-list" element={<WishListPage />} />
          <Route path="/products-list" element={<ProductsListPage />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
