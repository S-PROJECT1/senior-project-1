// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//       const [isLoading, setIsLoading] = useState(true);
//       const [userToken, setUserToken] = useState(null);

//       const login = () => {
//             setUserToken("sadasda");
//             setIsLoading(false);
//       };

//       const logOut = () => {
//             setUserToken(null);
//             setIsLoading(false);
//       };

//       return (
//             <AuthContext.Provider value={{ login, logOut, isLoading, userToken }}>
//                   {children}
//             </AuthContext.Provider>
//       );
// };