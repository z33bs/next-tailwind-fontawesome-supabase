import React from 'react';
import Link from "next/link";

function HomeLink(props) {
    return (
        <Link className={'underline'} href={'/'}>Navigate Home</Link>
    );
}

export default HomeLink;