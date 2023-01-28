'use client'
import React, {useEffect} from 'react';
import {useGatedContext} from "./GatedProvider";
import {useSupabase} from "./supabase-provider";
import {useRouter} from "next/navigation";

function GateTrojan(props) {
    const isGated = useGatedContext()
    const { supabase, session } = useSupabase();
    const router = useRouter()

    useEffect(()=>{
        if(!session && isGated)
            router.push('/bounced')
    },[session])

    return (
        <></>
    );
}

export default GateTrojan;