import { createContext, useContext, ReactNode } from "react";
import IWilder from "../interfaces/IWilder";
import { gql, useQuery } from "@apollo/client";

interface WilderContexProps {
  wilders: IWilder[];
  fetchData: () => void | Promise<void>;
}

export const WildersContext = createContext<WilderContexProps>({
  wilders: [],
  fetchData: () => {},
});

interface WilderProviderProps {
  children?: ReactNode;
}

const GET_WILDERS = gql`
  query GetAllWilders {
    getAllWilders {
      id
      city
      name
      skills {
        id
        name
      }
    }
  }
`;

export function WildersProvider({ children }: WilderProviderProps) {
  const { data, refetch, loading } = useQuery(GET_WILDERS);

  const wilders = data?.getAllWilders || [];

  console.log(loading);

  const fetchData = async () => {
    await refetch();
  };

  return (
    <WildersContext.Provider value={{ wilders, fetchData }}>
      {children}
    </WildersContext.Provider>
  );
}

export const useWilders = () => useContext(WildersContext);
