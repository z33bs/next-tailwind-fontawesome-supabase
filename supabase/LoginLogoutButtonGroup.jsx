// 'use client'
import React from 'react';
// import {useSupabase} from "./supabase-provider";
import SignOutButton from "./SignOutButton";
import SignInButtonEmail from "./SignInButtonEmail";
import SignInButtonProvider from "./SignInButtonProvider";
import {createClient} from "./supabase-server";

async function LoginLogoutButtonGroup(props) {

    const supabase = createClient()
    const {data: {session}} = await supabase.auth.getSession()


    // this `session` is from the root loader - server-side
    // therefore, it can safely be used to conditionally render
    // SSR pages without issues with hydration
    return session ? (
        <SignOutButton/>
    ) : (
        <div className={'flex'}>
            <SignInButtonEmail/>
            <SignInButtonProvider/>
        </div>
    );
}

export default LoginLogoutButtonGroup;