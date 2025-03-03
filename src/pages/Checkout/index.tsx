import { z } from "zod";
import { useContext } from "react";
import { isAxiosError } from "axios";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

import { CartContext } from "../../contexts/CartContext";

import { api } from "../../lib/api";

const CheckoutFormSchema = z.object({
  cep: z.string(),
  endereco: z.string(),
  numero: z.coerce.number(),
  complemento: z.string().optional(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string(),
  pagamento: z.enum(["credito", "debito", "dinheiro"]),
});

type CheckoutFormType = z.infer<typeof CheckoutFormSchema>;

export function Checkout() {
  const { coffees, subtotal, frete, total, resetCart } =
    useContext(CartContext);
  const navigate = useNavigate();
  const theme = useTheme();

  const { register, handleSubmit, control, reset } = useForm({
    resolver: zodResolver(CheckoutFormSchema),
    defaultValues: {
      cep: "",
      endereco: "",
      numero: undefined,
      complemento: "",
      bairro: "",
      cidade: "Córrego Fundo",
      uf: "MG",
      pagamento: undefined,
    },
  });

  async function onSubmit(data: CheckoutFormType) {
    try {
      const response = await api.post("/orders", {
        coffees,
        address: {
          cep: data.cep,
          street: data.endereco,
          number: data.numero,
          complement: data.complemento,
          neighborhood: data.bairro,
          city: data.cidade,
          state: data.uf,
        },
        payment: data.pagamento,
        subtotal,
        frete,
        total,
      });

      const { id } = response.data;

      alert("Pedido realizado com sucesso!");

      navigate(`/success?id=${id}`);
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.message);
      }
    } finally {
      resetCart();
      reset();
    }
  }

  return (
    <CheckoutForm onSubmit={handleSubmit(onSubmit)}>
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
                  <Input type="text" placeholder="CEP" {...register("cep")} />
                </td>
              </tr>

              <tr>
                <td colSpan={3}>
                  <Input
                    type="text"
                    placeholder="Endereço"
                    {...register("endereco")}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <Input
                    type="text"
                    placeholder="Número"
                    {...register("numero")}
                  />
                </td>

                <td colSpan={2}>
                  <Input
                    type="text"
                    placeholder="Complemento (Opcional)"
                    {...register("complemento")}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <Input
                    type="text"
                    placeholder="Bairro"
                    {...register("bairro")}
                  />
                </td>

                <td>
                  <Input
                    type="text"
                    placeholder="Cidade"
                    {...register("cidade")}
                  />
                </td>

                <td>
                  <Input type="text" placeholder="UF" {...register("uf")} />
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

          <Controller
            name="pagamento"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <RadioCardContainer
                  onValueChange={(value) => field.onChange(value)}
                  {...field}
                >
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
              );
            }}
          />
        </FormCard>
      </FormContainer>

      <FormContainer>
        <h3>Cafés selecionados</h3>

        <CoffeesContainer>
          {coffees.length > 0 ? (
            <>
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
                    }).format(frete / 100)}
                  </span>
                </TotalContainer>

                <TotalContainer>
                  <strong>Total</strong>
                  <strong>
                    {new Intl.NumberFormat("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    }).format(total / 100)}
                  </strong>
                </TotalContainer>

                <PaymentButton type="submit">CONFIRMAR PEDIDO</PaymentButton>
              </footer>
            </>
          ) : (
            <p>Nenhum café foi adicionado! ☕</p>
          )}
        </CoffeesContainer>
      </FormContainer>
    </CheckoutForm>
  );
}
