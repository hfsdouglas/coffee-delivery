import type { Dispatch, SetStateAction } from "react";
import { useTheme } from "styled-components";
import { Minus, Plus } from "@phosphor-icons/react";

import { QuantitySelectiorContainer } from "./styles";

interface QuantitySelectorProps {
  value: number;
  fn: Dispatch<SetStateAction<number>>;
}

export function QuantitySelector({ value, fn }: QuantitySelectorProps) {
  const theme = useTheme();

  function add() {
    fn((state) => state + 1);
  }

  function remove() {
    if (value <= 1) return;

    fn((state) => state - 1);
  }

  return (
    <QuantitySelectiorContainer>
      <button type="button" onClick={remove}>
        <Minus size={14} color={theme.purple} />
      </button>

      <input
        type="text"
        value={value}
        onChange={(e) => fn(Number(e.target.value))}
      />

      <button type="button" onClick={add}>
        <Plus size={14} color={theme.purple} />
      </button>
    </QuantitySelectiorContainer>
  );
}
