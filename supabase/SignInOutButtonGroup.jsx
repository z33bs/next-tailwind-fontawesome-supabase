'use client'
import React, {useEffect} from 'react';
import {useSupabase} from "./supabase-provider";
import SignOutButton from "./SignOutButton";
import SignInButtonEmail from "./SignInButtonEmail";
import SignInButtonProvider from "./SignInButtonProvider";
import {useGatedContext} from "./GatedProvider";
import {useRouter} from "next/navigation";

function SignInOutButtonGroup(props) {
    const isGated = useGatedContext()
    const { supabase, session } = useSupabase();
    const router = useRouter()

    useEffect(()=>{
        if(!session && isGated)
            router.push('/bounced')
    },[session])


    return session ? (
        <SignOutButton/>
    ) : (
        <div className={'flex'}>
            <SignInButtonEmail/>
            <SignInButtonProvider/>
        </div>
    );
}

export default SignInOutButtonGroup;