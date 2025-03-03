import { ShoppingCartSimple } from "@phosphor-icons/react";

import { ButtonContainer } from "./styles";
import { useTheme } from "styled-components";
import type { ButtonHTMLAttributes } from "react";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CartButton({ ...rest }: CartButtonProps) {
  const theme = useTheme();

  return (
    <ButtonContainer {...rest}>
      <ShoppingCartSimple size={22} weight="fill" color={theme["white"]} />
    </ButtonContainer>
  );
}
