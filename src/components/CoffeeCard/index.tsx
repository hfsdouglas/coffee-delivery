import { useContext, useState } from "react";
import { CartButton } from "../CartButton";
import { QuantitySelector } from "../QuantitySelector";
import {
  CartContainer,
  CoffeeContainer,
  LabelsContainer,
  PriceContainer,
} from "./styles";
import { CartContext } from "../../contexts/CartContext";

interface CoffeeProps {
  data: {
    id: string;
    name: string;
    image: string;
    description: string;
    type: string[];
    price: number;
  };
}

export function CoffeeCard({ data }: CoffeeProps) {
  const { addCoffee } = useContext(CartContext);

  const { id, name, image, description, type, price } = data;

  const [quantity, setQuantity] = useState<number>(1);

  function handleCartButtonClick() {
    const coffee = { id, name, image, description, type, price, quantity };

    addCoffee(coffee);
  }

  return (
    <CoffeeContainer>
      <img src={image} alt="" />

      <LabelsContainer>
        {type.map((label) => {
          return <span key={label}>{label.toLocaleUpperCase()}</span>;
        })}
      </LabelsContainer>

      <h3>{name}</h3>

      <p>{description}</p>

      <CartContainer>
        <PriceContainer>
          <span>R$</span>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              currency: "BRL",
              minimumFractionDigits: 2,
            }).format(price / 100)}
          </strong>
        </PriceContainer>

        <QuantitySelector fn={setQuantity} value={quantity} />

        <CartButton onClick={handleCartButtonClick} />
      </CartContainer>
    </CoffeeContainer>
  );
}
