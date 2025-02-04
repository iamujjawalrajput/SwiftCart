import { useState, createContext, useContext, useEffect } from "react";
const StoreContext = createContext(null);
export const DataProvider =({children}) =>{
   return(
         <StoreContext.Provider value={{

         }}>
            {children}
            </StoreContext.Provider>
   );
};

export const useStore = () => {
    return useContext(StoreContext);
};
