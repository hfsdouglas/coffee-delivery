import { useTheme } from "styled-components";
import { Trash } from "@phosphor-icons/react";

import { QuantitySelector } from "../QuantitySelector";

import {
  ButtonsContainer,
  CoffeeBox,
  CoffeeInfo,
  CoffeePrice,
  RemoveButton,
  Separator,
  CoffeeContainer,
} from "./styles";

export function CoffeeCheckoutItem() {
  const theme = useTheme();

  return (
    <>
      <CoffeeContainer>
        <CoffeeBox>
          <img src="./images/americano.png" alt="" />

          <CoffeeInfo>
            <h4>Expresso Tradicional</h4>

            <ButtonsContainer>
              <QuantitySelector />
              <RemoveButton type="button">
                <Trash color={theme.purple} />
                <span>REMOVER</span>
              </RemoveButton>
            </ButtonsContainer>
          </CoffeeInfo>
        </CoffeeBox>

        <CoffeePrice>R$ 9,90</CoffeePrice>
      </CoffeeContainer>

      <Separator />
    </>
  );
}
