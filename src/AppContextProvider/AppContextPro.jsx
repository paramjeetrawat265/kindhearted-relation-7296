import React, { createContext, useState } from 'react'
export const AppProvider=createContext();
const AppContextPro = ({children}) => {
    const [isAuth,setIsAuth]=useState(false)
  return (
    <AppProvider.Provider value={{isAuth,setIsAuth}}>
        {children}
    </AppProvider.Provider>
  )
}

export default AppContextPro