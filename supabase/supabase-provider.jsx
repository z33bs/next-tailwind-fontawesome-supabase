'use client';
import React, { createContext, useContext, useState } from 'react';
import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";

// typical Context creation
// @ts-ignore
const Context = createContext(null);
//NB - Use object destructuring: const {supabase, session} = useSupabase()
export const useSupabase = () => useContext(Context);
// end

// abstract provider to this client component, so
// it can be used in a server-only component
export default function SupabaseProvider({children, session}
) {
    // singleton instance of SupabaseClient to be used across all client components
    const [supabase] = useState(() => createBrowserSupabaseClient());

    return (
        // we're already setting supabase, so will only have to provide session
        // when using the provider
        <Context.Provider value={{ supabase, session }}>
            <>{children}</>
        </Context.Provider>
    );
}

