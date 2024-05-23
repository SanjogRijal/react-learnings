import { ReactNode } from "react";
import { ListValues, myContext } from "./MyContext";

const ParentComponent = ({children}: {children: ReactNode}) => {
    let data: ListValues[] = [{
        name: "Sanjog Rijal",
        address: "Maitidevi, Dillibazaar",
        telephone: 9869304785
    }];
    

    return <myContext.Provider value = {data}>
        {children}
    </myContext.Provider>
}

export default ParentComponent;