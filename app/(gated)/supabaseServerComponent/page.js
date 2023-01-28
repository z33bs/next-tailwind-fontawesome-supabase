import React from 'react';
import {createClient} from "../../../supabase/supabase-server";
import ShowSessionComponent from "../ShowSessionComponent";

async function Page(props) {
    const supabase = createClient()
    const {data: {session}} = await supabase.auth.getSession()

    return (
        <ShowSessionComponent supabase={supabase} session={session}/>
    );
}

export default Page;