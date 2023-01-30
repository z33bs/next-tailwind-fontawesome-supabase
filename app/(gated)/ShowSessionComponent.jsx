import React from 'react';
import HomeLink from "../HomeLink";
import SignInOutButtonGroup from "../../supabase/SignInOutButtonGroup";

function ShowSessionComponent({supabase, session}) {

    return (
        <main>
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold underline flex items-center">
                    Session passed looks like this:
                </h1>
                <SignInOutButtonGroup/>
            </div>
            <div className={'p-20'}>
                <HomeLink/>
            </div>
            <pre>{JSON.stringify(session,null,2)}</pre>
        </main>

    );
}

export default ShowSessionComponent;