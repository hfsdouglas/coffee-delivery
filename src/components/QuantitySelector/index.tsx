import { Minus, Plus } from "@phosphor-icons/react";
import { QuantitySelectiorContainer } from "./styles";
import { useTheme } from "styled-components";

export function QuantitySelector() {
  const theme = useTheme();

  return (
    <QuantitySelectiorContainer>
      <button type="button">
        <Minus size={14} color={theme.purple} />
      </button>

      <input type="text" value={1} />

      <button type="button">
        <Plus size={14} color={theme.purple} />
      </button>
    </QuantitySelectiorContainer>
  );
}
