import { ShoppingCartSimple } from "@phosphor-icons/react";

import { ButtonContainer } from "./styles";
import { useTheme } from "styled-components";

export function Cart() {
  const theme = useTheme();

  return (
    <ButtonContainer>
      <span>1</span>

      <ShoppingCartSimple
        size={22}
        weight="fill"
        color={theme["yellow-dark"]}
      />
    </ButtonContainer>
  );
}
