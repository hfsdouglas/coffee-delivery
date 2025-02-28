import {
  CoffeeContainer,
  CoffeeSection,
  IntroContainer,
  IntroItemsContainer,
  IntroSection,
  TextContainer,
} from "./styles";

import CoffeeImg from "../../assets/coffee.svg";
import { IntroItem } from "../../components/IntroItem";
import { Coffee } from "../../components/Coffee";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";

type ICoffees = {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string[];
  price: number;
}[];

export function Home() {
  const [coffees, setCoffees] = useState<ICoffees>();

  useEffect(() => {
    (async () => {
      const response = await api.get("/coffees");
      setCoffees(response.data);
    })();
  }, []);

  if (!coffees) {
    return <div>carregando...</div>;
  }

  return (
    <main>
      <IntroSection>
        <IntroContainer>
          <TextContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h3>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h3>
          </TextContainer>

          <IntroItemsContainer>
            <IntroItem type="shopping" />
            <IntroItem type="box" />
            <IntroItem type="timer" />
            <IntroItem type="coffee" />
          </IntroItemsContainer>
        </IntroContainer>

        <img src={CoffeeImg} alt="" />
      </IntroSection>

      <CoffeeSection>
        <h2>Nossos cafés</h2>

        <CoffeeContainer>
          {coffees.map((coffee) => {
            return <Coffee key={coffee.id} data={coffee} />;
          })}
        </CoffeeContainer>
      </CoffeeSection>
    </main>
  );
}
