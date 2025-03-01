import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import {
  OrderDetailsCard,
  OrderContainer,
  SuccessContainer,
  TitleContainer,
  OrderInfoIcon,
  OrderInfo,
} from "./styles";

export function Success() {
  return (
    <SuccessContainer>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TitleContainer>

      <OrderContainer>
        <OrderDetailsCard>
          <OrderInfo>
            <OrderInfoIcon>
              <MapPin weight="fill" />
            </OrderInfoIcon>

            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </OrderInfo>

          <OrderInfo>
            <OrderInfoIcon variant="yellow">
              <Timer weight="fill" />
            </OrderInfoIcon>

            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </OrderInfo>

          <OrderInfo>
            <OrderInfoIcon variant="orange">
              <CurrencyDollar />
            </OrderInfoIcon>

            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </OrderInfo>
        </OrderDetailsCard>

        <img src="./delivery.svg" alt="" />
      </OrderContainer>
    </SuccessContainer>
  );
}
