import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from "@phosphor-icons/react";
import { IntroItemContainer, IntroItemIcon } from "./styles";

export type IntroItem = "shopping" | "timer" | "box" | "coffee";

interface IntroItemProps {
  type: IntroItem;
}

const IntroItemMap: Record<IntroItem, string> = {
  box: "Embalagem mantém o café intacto",
  coffee: "O café chega fresquinho até você",
  shopping: "Compra simples e segura",
  timer: "Entrega rápida e rastreada",
};

export function IntroItem({ type }: IntroItemProps) {
  return (
    <IntroItemContainer>
      {type === "box" && (
        <IntroItemIcon type={type}>
          <Package size={22} weight="fill" color="#FFFFFF" />
        </IntroItemIcon>
      )}

      {type === "coffee" && (
        <IntroItemIcon type={type}>
          <Coffee size={22} weight="fill" color="#FFFFFF" />
        </IntroItemIcon>
      )}

      {type === "timer" && (
        <IntroItemIcon type={type}>
          <Timer size={22} weight="fill" color="#FFFFFF" />
        </IntroItemIcon>
      )}

      {type === "shopping" && (
        <IntroItemIcon type={type}>
          <ShoppingCartSimple size={22} weight="fill" color="#FFFFFF" />
        </IntroItemIcon>
      )}

      <span>{IntroItemMap[type]}</span>
    </IntroItemContainer>
  );
}
