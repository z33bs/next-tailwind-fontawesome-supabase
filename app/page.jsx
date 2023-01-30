import React from 'react';
import {createClient} from "../supabase/supabase-server";
import Link from "next/link";
import SignInButtonEmail from "../supabase/SignInButtonEmail";
import SignInButtonProvider from "../supabase/SignInButtonProvider";
import SignInOutButtonGroup from "../supabase/SignInOutButtonGroup";

async function Page(props) {
    const supabase = createClient()
    const {data: {session}} = await supabase.auth.getSession()

    return (
        <div>
        <div className="flex justify-between">
            <h1 className={'text-3xl font-bold '}>Home</h1>
            <SignInOutButtonGroup/>

        </div>
            <div className={'mt-10 h-20 flex flex-col justify-between items-center'}>
                <Link className={'underline'} href={'/supabaseClientComponent'} prefetch={false}>Gated client Component</Link>
                <Link className={'underline'} href={'/supabaseServerComponent'} prefetch={false}>Gated server Component</Link>
                <Link className={'underline'} href={'/bounced'} >Login (old bounced)</Link>
                <Link className={'underline'} href={'/secure/sensitive'} prefetch={false}>Secure Page</Link>
            </div>
        </div>
    );
}

export default Page;