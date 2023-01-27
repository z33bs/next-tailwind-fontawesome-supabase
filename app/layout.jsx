import '../styles/globals.css'
import React from 'react';
import SupabaseProvider from "../supabase/supabase-provider";
import SupabaseListener from "../supabase/supabase-listener";
import {createClient} from "../supabase/supabase-server";

async function RootLayout({children}) {
    const supabase = createClient()
    const {data: { session },} = await supabase.auth.getSession()

    return (
        <html lang="en">
            <head/>
            <body>
                <SupabaseProvider session={session}>
                    <SupabaseListener serverAccessToken={session?.access_token}/>
                    {children}
                </SupabaseProvider>
            </body>
        </html>
    );
}

export default RootLayout;