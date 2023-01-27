import React from 'react';
import SignOutButton from "../../supabase/SignOutButton";
import HomeLink from "../HomeLink";


function ShowSessionComponent({supabase, session}) {
    return (
        <main>
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold underline flex items-center">
                    Session passed looks like this:
                </h1>
                <SignOutButton/>
            </div>
            <div className={'p-20'}>
                <HomeLink/>
            </div>
            <pre>{JSON.stringify(session,null,2)}</pre>
        </main>

    );
}

export default ShowSessionComponent;