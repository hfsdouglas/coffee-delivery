import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { QuantitySelector } from "../../components/QuantitySelector";
import {
  CardHeader,
  CheckoutForm,
  CoffeesCard,
  FormCard,
  FormContainer,
  Input,
  RadioCardContainer,
  RadioCardIndicator,
  RadioCardItem,
  Table,
} from "./styles";
import { useTheme } from "styled-components";

export function Checkout() {
  const theme = useTheme();

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

        <CoffeesCard>
          <main>
            <section>
              <img src="" alt="" />

              <div>
                <h4>Expresso Tradicional</h4>
                <div>
                  <QuantitySelector />
                  <button type="button">Remover</button>
                </div>
              </div>
            </section>
          </main>

          <footer>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>

            <button type="submit">CONFIRMAR PEDIDO</button>
          </footer>
        </CoffeesCard>
      </FormContainer>
    </CheckoutForm>
  );
}
