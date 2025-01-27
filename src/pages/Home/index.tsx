import {
  CoffeeSection,
  IntroContainer,
  IntroItemsContainer,
  IntroSection,
  TextContainer,
} from "./styles";

import CoffeeImg from "../../assets/coffee.svg";
import { IntroItem } from "../../components/IntroItem";

export function Home() {
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
      </CoffeeSection>
    </main>
  );
}
