import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Header } from "../../components/Header";
import { CartProvider } from "../../contexts/CartContext";

export function DefaultLayout() {
  return (
    <CartProvider>
      <Header />

      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </CartProvider>
  );
}
