import {useContext, createContext, useState, use} from 'react';

const AuthContext = createContext({});

export function AuthProvider({children}){
    const [user, setUser] = useState(null);

    //Simulando o login, editar depois
    function login(email, password){
        if(email && password){
            setUser({name: "Lívian", email})
            return true;
        }
        return false;
    }

    //Simulando o registro, editar depois
    function register(name, email, password){
        if(name && email && password){
            setUser({name, email});
            return true;
        }
        return false;
    }
    //Simulando a saída, editar depois
    function logout(){
        setUser(null);
    }

    return(
        <AuthProvider.Provider value={{user, signed: !!user, login, register, logout }}> 
        {children}
        </AuthProvider.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext);
}