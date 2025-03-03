import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";

import { CoffeeCheckoutItem } from "../../components/CoffeeCheckoutItem";

import {
  CardHeader,
  CheckoutForm,
  FormCard,
  FormContainer,
  Input,
  RadioCardContainer,
  RadioCardIndicator,
  RadioCardItem,
  Table,
  TotalContainer,
  PaymentButton,
  CoffeesContainer,
} from "./styles";

import { useTheme } from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Checkout() {
  const theme = useTheme();
  const { coffees } = useContext(CartContext);

  const subtotal = coffees.reduce((total, coffee) => total + coffee.price, 0);
  const frete = 3.5;
  const total = subtotal / 100 + frete;

  return (
    <CheckoutForm>
      <FormContainer>
        <h3>Complete seu pedido</h3>

        <FormCard>
          <CardHeader>
            <MapPinLine size={20} color={theme["yellow-dark"]} />

            <div>
              <h4>Endereço de Entrega</h4>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </CardHeader>

          <Table>
            <thead>
              <tr>
                <th style={{ minWidth: "200px" }} />
                <th style={{ width: "100%" }} />
                <th style={{ minWidth: "60px" }} />
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <Input type="text" placeholder="CEP" />
                </td>
              </tr>

              <tr>
                <td colSpan={3}>
                  <Input type="text" placeholder="Endereço" />
                </td>
              </tr>

              <tr>
                <td>
                  <Input type="text" placeholder="Número" />
                </td>

                <td colSpan={2}>
                  <Input type="text" placeholder="Complemento (Opcional)" />
                </td>
              </tr>

              <tr>
                <td>
                  <Input type="text" placeholder="Bairro" />
                </td>

                <td>
                  <Input type="text" placeholder="Cidade" />
                </td>

                <td>
                  <Input type="text" placeholder="UF" />
                </td>
              </tr>
            </tbody>
          </Table>
        </FormCard>

        <FormCard>
          <CardHeader>
            <CurrencyDollar size={20} color={theme.purple} />

            <div>
              <h4>Pagamento</h4>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </CardHeader>

          <RadioCardContainer>
            <RadioCardItem value="credito" id="credito">
              <div>
                <CreditCard size={16} color={theme.purple} />
                <label htmlFor="credito">CARTÃO DE CRÉDITO</label>
              </div>

              <RadioCardIndicator />
            </RadioCardItem>

            <RadioCardItem value="debito" id="debito">
              <div>
                <Bank size={16} color={theme.purple} />
                <label htmlFor="debito">CARTÃO DE DÉBITO</label>
              </div>

              <RadioCardIndicator />
            </RadioCardItem>

            <RadioCardItem value="dinheiro" id="dinheiro">
              <div>
                <Money size={16} color={theme.purple} />
                <label htmlFor="dinheiro">DINHEIRO</label>
              </div>

              <RadioCardIndicator />
            </RadioCardItem>
          </RadioCardContainer>
        </FormCard>
      </FormContainer>

      <FormContainer>
        <h3>Cafés selecionados</h3>

        <CoffeesContainer>
          <main>
            {coffees.map((coffee) => (
              <CoffeeCheckoutItem data={coffee} key={coffee.id} />
            ))}
          </main>

          <footer>
            <TotalContainer>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat("pt-BR", {
                  currency: "BRL",
                  style: "currency",
                }).format(subtotal / 100)}
              </span>
            </TotalContainer>

            <TotalContainer>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat("pt-BR", {
                  currency: "BRL",
                  style: "currency",
                }).format(frete)}
              </span>
            </TotalContainer>

            <TotalContainer>
              <strong>Total</strong>
              <strong>
                {new Intl.NumberFormat("pt-BR", {
                  currency: "BRL",
                  style: "currency",
                }).format(total)}
              </strong>
            </TotalContainer>

            <PaymentButton type="submit">CONFIRMAR PEDIDO</PaymentButton>
          </footer>
        </CoffeesContainer>
      </FormContainer>
    </CheckoutForm>
  );
}
