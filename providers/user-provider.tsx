"use client"

import { UserData } from '@/config';
import { IUser } from '@/types';
import { createContext, useContext, useState } from 'react';

// Define the shape of the context
export const UserContext = createContext<{
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    isShared: boolean;
    setIsShared: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    user: UserData,
    setUser: () => { },
    isShared: false,
    setIsShared: () => { }
});

// Define the provider component
export const UserProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<IUser>(UserData);
    const [isShared, setIsShared] = useState<boolean>(false);

    return (
        <UserContext.Provider value={{ user, setUser, isShared, setIsShared }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to access the Scroll context
export const useUserContext = () => {
    return useContext(UserContext);
};
