import { createContext } from "react";

export const StateContext = createContext();

const StateContextProvider = ({childern}) => {

    const name = "Mg Mg"
    const data = {name};

    return(
        <StateContext.Provider value={{data}}>
            {childern}
        </StateContext.Provider>
    )

}

export default StateContextProvider