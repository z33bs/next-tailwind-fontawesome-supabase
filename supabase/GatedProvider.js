'use client'
import React, {useContext} from 'react';
import { createContext } from 'react';

export const Context = createContext(false);
// returns bool isGated
export const useGatedContext = () => useContext(Context);

export default function GatedProvider({children, isGated=true}) {
    return (
        <Context.Provider value={isGated}>
            <>{children}</>
        </Context.Provider>
    );
}

