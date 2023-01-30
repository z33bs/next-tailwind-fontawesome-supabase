'use client'

import React from 'react';
import {useSupabase} from "./supabase-provider";

function SignInButtonEmail({
    children=(<p>Email Sign In</p>),
    email = 'abc@abc.com',
    password = 'password',
    onSuccess=()=>null,
}) {
    const { supabase, session } = useSupabase();

    const handleEmailLogin = async () => {
        console.log(email,password)
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        console.log('Handling login',JSON.stringify(data,null,2))

        if (error) {
            console.log({ error });
        }

        if(data.session)
            onSuccess()
    };

    return (
        <button className="bg-gray-500 p-3 mr-3" onClick={handleEmailLogin}>
            { children }
        </button>
    );
}

export default SignInButtonEmail;