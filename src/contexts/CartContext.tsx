import { createContext, type ReactNode, useEffect, useReducer } from "react";

interface CartProviderProps {
  children: ReactNode;
}

export interface Coffee {
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

interface CartContextType {
  coffees: Coffee[];
  volumes: number;
  addCoffee: (value: Coffee) => void;
  removeCoffee: (value: Coffee) => void;
  deleteCoffee: (value: Coffee) => void;
}

export const CartContext = createContext({} as CartContextType);

//biome-ignore lint/suspicious/noExplicitAny: <Any foi utilizado intencionalmente>
export function reducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case "ADD_COFFEE": {
      const coffeeExists = state.coffees.find(
        (coffee) => coffee.id === action.payload.id
      );

      if (coffeeExists) {
        return {
          ...state,
          coffees: state.coffees.map((coffee) => {
            if (coffee.id === action.payload.id) {
              return {
                ...coffee,
                quantity: coffee.quantity + 1,
              };
            }

            return coffee;
          }),
        };
      }

      return {
        ...state,
        coffees: [...state.coffees, action.payload],
      };
    }

    case "REMOVE_COFFEE": {
      return {
        ...state,
        coffees: state.coffees
          .map((coffee) => {
            if (coffee.id === action.payload.id) {
              return {
                ...coffee,
                quantity: coffee.quantity - 1,
              };
            }

            return coffee;
          })
          .filter((coffee) => coffee.quantity > 0),
      };
    }

    case "DELETE_COFFEE": {
      return {
        ...state,
        coffees: state.coffees.filter(
          (coffee) => coffee.id !== action.payload.id
        ),
      };
    }

    default:
      return state;
  }
}

export function CartProvider({ children }: CartProviderProps) {
  const [coffeeState, dispatch] = useReducer(
    reducer,
    { coffees: [] } as CoffeeState,
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

  const { coffees } = coffeeState;

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeState);

    localStorage.setItem("@coffee-delivery:coffees-state-1.0.0", stateJSON);
  }, [coffeeState]);

  function addCoffee(coffee: Coffee) {
    dispatch({ type: "ADD_COFFEE", payload: coffee });
  }

  function removeCoffee(coffee: Coffee) {
    dispatch({ type: "REMOVE_COFFEE", payload: coffee });
  }

  function deleteCoffee(coffee: Coffee) {
    dispatch({ type: "DELETE_COFFEE", payload: coffee });
  }

  const volumes = coffees.reduce((total, coffee) => total + coffee.quantity, 0);

  return (
    <CartContext.Provider
      value={{ coffees, volumes, addCoffee, removeCoffee, deleteCoffee }}
    >
      {children}
    </CartContext.Provider>
  );
}
