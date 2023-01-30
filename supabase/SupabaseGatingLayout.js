import React from 'react';
import {createClient} from "./supabase-server";

async function SupabaseGatingLayout({children, isGatedComponent}) {
    const supabase = createClient()
    const {data: {session}, error} = await supabase.auth.getSession()

    /* Alternative is to use GateTrojan with a redirect
    * <GatedProvider>
    *   <GateTrojan redirectUrl={'/bounced'}/>
    * </GatedProvider>
    * */

    return (
        <>
            {session ? children : isGatedComponent}
        </>
    );
}

export default SupabaseGatingLayout;