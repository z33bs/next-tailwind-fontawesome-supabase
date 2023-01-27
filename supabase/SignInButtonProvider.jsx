'use client'
import React from 'react';
import {useSupabase} from "./supabase-provider";

function SignInButtonProvider({
    provider='github',
    children = (<p>{provider} Sign In</p>)
  }) {
    const { supabase, session } = useSupabase()

    const handleProviderLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: provider
        });

        if (error) {
            console.log({ error });
        }
    }

    return (
        <button className="bg-gray-500 p-3 mr-3" onClick={handleProviderLogin}>
            { children }
        </button>
    );
}

export default SignInButtonProvider;