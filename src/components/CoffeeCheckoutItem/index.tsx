import { useTheme } from "styled-components";
import { Trash } from "@phosphor-icons/react";

import {
  ButtonsContainer,
  CoffeeBox,
  CoffeeInfo,
  CoffeePrice,
  RemoveButton,
  Separator,
  CoffeeContainer,
} from "./styles";

import { CartContext, type Coffee } from "../../contexts/CartContext";
import { useContext } from "react";
import { QuantitySelectorCheckout } from "../QuantitySelectorCheckout";

interface CoffeeCheckoutItemProps {
  data: Coffee;
}

export function CoffeeCheckoutItem({ data }: CoffeeCheckoutItemProps) {
  const theme = useTheme();
  const { deleteCoffee } = useContext(CartContext);

  function handleRemoveButtonClick() {
    deleteCoffee(data);
  }

  return (
    <>
      <CoffeeContainer>
        <CoffeeBox>
          <img src={data.image} alt="" />

          <CoffeeInfo>
            <h4>{data.name}</h4>

            <ButtonsContainer>
              <QuantitySelectorCheckout value={data} />

              <RemoveButton type="button" onClick={handleRemoveButtonClick}>
                <Trash color={theme.purple} />
                <span>REMOVER</span>
              </RemoveButton>
            </ButtonsContainer>
          </CoffeeInfo>
        </CoffeeBox>

        <CoffeePrice>
          {new Intl.NumberFormat("pt-BR", {
            currency: "BRL",
            style: "currency",
          }).format(data.price / 100)}
        </CoffeePrice>
      </CoffeeContainer>

      <Separator />
    </>
  );
}
