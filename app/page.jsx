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
        <div className={'py-2'}>Warning: may need to refresh pages due to browser cache interfering / middleware not triggered</div>
        {/* todo solve inconsistent gating
            browser not triggering middleware without refresh
            trying... not work... handle gating without middleware? context?
            https://stackoverflow.com/questions/62257837/how-can-i-disable-cache-on-a-specific-page-only-in-next-js
            https://nextjs.org/docs/api-reference/next.config.js/headers#header-overriding-behavior
         */}
        <div className={'mt-10 h-20 flex flex-col justify-between items-center'}>
            <Link className={'underline'} href={'/loggedIn/supabaseClientComponent'}>Client Component</Link>
            <Link className={'underline'} href={'/loggedIn/supabaseServerComponent'}>Server Component</Link>
        </div>
        </div>
    );
}

export default Page;