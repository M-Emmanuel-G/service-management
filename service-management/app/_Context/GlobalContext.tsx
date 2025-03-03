"use client"

import { createContext, useContext, useState, ReactNode } from "react";

interface ProductProps {
    id: string;
    product: string;
    value: string;
    createdAt: string;
  }


interface GlobalContextType {
  products: ProductProps [] | null;
  setProducts: ( products:ProductProps[] | null) => void;
}

// 2️⃣ Criando um contexto com valor inicial como `undefined`
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// 3️⃣ Criando um Provider
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductProps[] | null>(null);

  return (
    <GlobalContext.Provider value={{ products, setProducts }}>
      {children}
    </GlobalContext.Provider>
  );
};

// 4️⃣ Criando um Hook customizado para consumir o contexto
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext deve ser usado dentro do GlobalProvider");
  }
  return context;
};
