import { MapPin } from "@phosphor-icons/react";
import { HeaderContainer, LocationContainer } from "./styles";

import logoImg from "../../assets/logo.png";
import { useTheme } from "styled-components";
import { Cart } from "../Cart";
import { Link } from "react-router-dom";

export function Header() {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <nav>
        <Link to="/" id="logo">
          <img src={logoImg} alt="" height={40} width={"auto"} />
        </Link>

        <LocationContainer>
          <div>
            <MapPin size={22} weight="fill" color={theme["purple"]} />
            <span>Córrego Fundo, MG</span>
          </div>

          <Cart />
        </LocationContainer>
      </nav>
    </HeaderContainer>
  );
}
