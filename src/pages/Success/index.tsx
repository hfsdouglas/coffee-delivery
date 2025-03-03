import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import {
  OrderDetailsCard,
  OrderContainer,
  SuccessContainer,
  TitleContainer,
  OrderInfoIcon,
  OrderInfo,
  LoadingContainer,
} from "./styles";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import type { Coffee } from "../../contexts/CartContext";
import { isAxiosError } from "axios";
import { Puff } from "react-loader-spinner";
import { useTheme } from "styled-components";

interface Order {
  coffees: Coffee[];
  address: {
    cep: string;
    street: string;
    number: number;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  payment: "credito" | "debito" | "dinheiro";
}

export function Success() {
  const [order, setOrder] = useState<Order>();
  const [searchParams] = useSearchParams();
  const theme = useTheme();
  const navigate = useNavigate();

  const id = searchParams.get("id");

  useEffect(() => {
    // Simula um delay na requisição para mostrar o loader
    setTimeout(() => {
      (async () => {
        try {
          const response = await api.get(`/orders/${id}`);
          setOrder(response.data);
        } catch (error) {
          if (isAxiosError(error)) {
            alert("Não foi possível encontrar seu pedido!");

            navigate("/");
          }
        }
      })();
    }, 3000);
  }, [id, navigate]);

  if (!order) {
    return (
      <LoadingContainer>
        <Puff
          height="80"
          width="80"
          visible={true}
          color={theme["purple-dark"]}
        />

        <strong>Cafés quase saindo...</strong>
      </LoadingContainer>
    );
  }

  const address =
    order.address.complement.length > 0
      ? `${order.address.street}, ${order.address.number} - ${order.address.complement}`
      : `${order.address.street}, ${order.address.number}`;

  const localtion = `${order.address.neighborhood} - ${order.address.city} - ${order.address.state}`;

  const paymentMethod = {
    credito: "Crédito",
    debito: "Débito",
    dinheiro: "Dinheiro",
  };

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
                Entrega em <strong>{address}</strong>
              </p>
              <p>{localtion}</p>
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
                <strong>{paymentMethod[order.payment]}</strong>
              </p>
            </div>
          </OrderInfo>
        </OrderDetailsCard>

        <img src="./delivery.svg" alt="" />
      </OrderContainer>
    </SuccessContainer>
  );
}
