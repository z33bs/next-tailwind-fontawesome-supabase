'use client'
import React, {useEffect} from 'react';
import {useGatedContext} from "./GatedProvider";
import {useSupabase} from "../supabase-provider";
import {useRouter} from "next/navigation";

function GateTrojan({redirectUrl=undefined}) {
    const isGated = useGatedContext()
    const { supabase, session } = useSupabase();
    const router = useRouter()

    useEffect(()=>{
        if(redirectUrl && !session && isGated)
            router.push(redirectUrl)
    },[session])

    return (
        <></>
    );
}

export default GateTrojan;