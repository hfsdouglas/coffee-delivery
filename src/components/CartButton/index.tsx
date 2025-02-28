import { ShoppingCartSimple } from "@phosphor-icons/react";

import { ButtonContainer } from "./styles";
import { useTheme } from "styled-components";

export function CartButton() {
  const theme = useTheme();

  return (
    <ButtonContainer>
      <ShoppingCartSimple size={22} weight="fill" color={theme["white"]} />
    </ButtonContainer>
  );
}
