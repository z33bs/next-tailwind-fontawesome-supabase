import React from 'react';
import Link from "next/link";

function Page(props) {
    return (
        <div>
            This is a super secure page... see next.config.js where headers is set.
            <br/> Inspect the headers on this page
            <br/> Also check the console and observe blocked requests. Need to whitelist sources in content policy
            <br/><Link className={'underline'} href={'/'}>Home</Link>

        </div>
    );
}

export default Page;