import { useTheme } from "styled-components";
import { Minus, Plus } from "@phosphor-icons/react";

import { QuantitySelectorContainer } from "./styles";
import { CartContext, type Coffee } from "../../contexts/CartContext";
import { useContext } from "react";

interface QuantitySelectorCheckoutProps {
  value: Coffee;
}

export function QuantitySelectorCheckout({
  value,
}: QuantitySelectorCheckoutProps) {
  const { addCoffee, removeCoffee } = useContext(CartContext);
  const theme = useTheme();

  function handleAddButtonClick() {
    addCoffee(value);
  }

  function handleRemoveButtonClick() {
    removeCoffee(value);
  }

  return (
    <QuantitySelectorContainer>
      <button type="button" onClick={handleRemoveButtonClick}>
        <Minus size={14} color={theme.purple} />
      </button>

      <input type="text" value={value.quantity} readOnly />

      <button type="button" onClick={handleAddButtonClick}>
        <Plus size={14} color={theme.purple} />
      </button>
    </QuantitySelectorContainer>
  );
}
