import React from 'react';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSmile} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Page(props) {
    return (
        <div className={'flex flex-col items-center'}>
            <FontAwesomeIcon icon={faGithub} className="h-14 p-3"/>
            <FontAwesomeIcon icon={faSmile} className="h-14 text-indigo-500"/>
            <Link className={'underline p-4'} href={'/'}>Home</Link>
        </div>
    );
}

export default Page;