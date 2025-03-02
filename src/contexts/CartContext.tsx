import { createContext, useReducer } from "react";

export const CartContext = createContext({});

interface Coffee {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string[];
  price: number;
  quantity: number;
}

interface CoffeeState {
  coffees: Coffee[];
}

//biome-ignore lint/suspicious/noExplicitAny: <Any foi utilizado intencionalmente>
export function reducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case "ADD_COFFEE":
    // TODO: find if the coffee exists and add quantity to it, otherwise it must be added
    case "REMOVE_COFFEE":
    // TODO: find the coffee and remove quantity, if it has only one item it must be remove completely
    default:
      return state;
  }
}

export function CartProvider() {
  const [coffeeState, dispatch] = useReducer(
    reducer,
    { coffees: [] },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:coffees-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );
}
