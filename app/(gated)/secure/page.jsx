import React from 'react';
import Link from "next/link";
import {headers} from "next/headers";

function Page(props) {
    const headersList = headers();
    return (
        <div>
            This is a super secure page... see next.config.js where headers is set <Link href={'/'}>Home</Link>
            <pre>{JSON.stringify(headersList,null,2)}</pre>
        </div>
    );
}

export default Page;