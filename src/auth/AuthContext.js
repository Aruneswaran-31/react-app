import { createContext, useState } from "react";

const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const[isAuthenticated,setIsAuthenticated] = useState(false);
    const login = (username, password) => {
        if(username && password){
            setIsAuthenticated(true);
            return true;
        }
    } 
    const logout = () => {}
    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthContext;