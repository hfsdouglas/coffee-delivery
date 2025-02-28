import { CoffeeSkeletonItem } from "./styles";

export function CoffeeSkeleton() {
  return Array.from({ length: 12 }).map((_, i) => {
    return <CoffeeSkeletonItem key={i} />;
  });
}
