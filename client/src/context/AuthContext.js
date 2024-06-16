import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user:{
    _id: "666c5057969a79f83d730852",
    username:"john",
    email:"john@gmail.com",
    password:"$2b$10$0B9T2qLoIQElJ.c8yUReVuc0PnXeiWOLYqCDJ4z6E8x0Pk6.67eve",
    profilePicture:"1.jpg",
    coverPicture:"",
    followers: [],
    followings: [],
    },
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return(
        <AuthContext.Provider 
        value ={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}
        >
        {children}
        </AuthContext.Provider>

    );
};