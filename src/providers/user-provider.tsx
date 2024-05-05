'use client'

import { Tables } from "@/database.types";
import { User } from "@supabase/supabase-js";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<{currentUser: User | null, currentAccountUser: Tables<'users'> | null} | null>(null);

export const UserProvider = ({ children, user, accountUser }: { 
    children: ReactNode, 
    user: User | null, 
    accountUser: Tables<'users'>  | null 
}) => {
    const [currentUser, setCurrentUser] = useState<User | null>(user)
    const [currentAccountUser, setCurrentAccountUser] = useState<Tables<'users'> | null>(accountUser)

    useEffect(() => {
        setCurrentUser(user)
        setCurrentAccountUser(accountUser)
    }, [currentUser, currentAccountUser, user, accountUser])
    return (
        <UserContext.Provider value={{currentUser, currentAccountUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useCurrentUser = () => useContext(UserContext)