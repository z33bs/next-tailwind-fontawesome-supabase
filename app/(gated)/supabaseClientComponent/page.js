'use client'
import React from 'react';
import {useSupabase} from "../../../supabase/supabase-provider";
import ShowSessionComponent from "../ShowSessionComponent";

function Page(props) {
    const { supabase, session } = useSupabase()

    // can use supabase to retrieve data e.g.
    // supabase. (see db operations in supabase dashboard)

    return (
        <ShowSessionComponent supabase={supabase} session={session}/>
    );
}

export default Page;