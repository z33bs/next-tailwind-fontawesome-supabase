'use client'
import React from 'react';
import {useSupabase} from "./supabase-provider";

function SignOutButton() {
    const {supabase, session} = useSupabase()

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.log({ error });
        }
    };

    return (
        <button className="bg-gray-500 p-3 mr-3" onClick={handleLogout}>
            Sign Out
        </button>
    );
}

export default SignOutButton;