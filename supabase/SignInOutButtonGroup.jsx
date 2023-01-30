'use client'
import React from 'react';
import {useSupabase} from "./supabase-provider";
import SignOutButton from "./SignOutButton";
import SignInButtonEmail from "./SignInButtonEmail";
import SignInButtonProvider from "./SignInButtonProvider";

function SignInOutButtonGroup() {
    const { supabase, session } = useSupabase();

    return session ? (
        <SignOutButton/>
    ) : (
        <div className={'flex'}>
            <SignInButtonEmail />
            <SignInButtonProvider />
        </div>
    );
}

export default SignInOutButtonGroup;