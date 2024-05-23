import {createContext} from "react";

export type ListValues = {
    name: string,
    telephone: number
    address: string,
}

export const myContext = createContext<ListValues[] | undefined>(undefined);
