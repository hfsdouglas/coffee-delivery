import { ShoppingCartSimple } from "@phosphor-icons/react";

import { ButtonContainer } from "./styles";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
  const theme = useTheme();
  const { volumes } = useContext(CartContext);

  return (
    <ButtonContainer to="/checkout">
      {volumes > 1 && <span>{volumes}</span>}

      <ShoppingCartSimple
        size={22}
        weight="fill"
        color={theme["yellow-dark"]}
      />
    </ButtonContainer>
  );
}
