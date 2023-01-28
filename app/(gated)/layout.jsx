import React from 'react';
import GatedProvider from "../../supabase/GatedProvider";
import {createClient} from "../../supabase/supabase-server";
import GateTrojan from "../../supabase/GateTrojan";

async function Layout({children}) {
    const supabase = createClient()
    const {data: { session }, error} = await supabase.auth.getSession()
    return (
        <GatedProvider>
            <div className={' w-screen border border-black'}>
                <div className={'absolute top-0 right-0'}>
                    <GateTrojan/>
                </div>
                {session && children}
            </div>
        </GatedProvider>
    );
}

export default Layout;