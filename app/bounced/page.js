import React from "react";
import SignInUpForm from "../../supabase/SignInUpForm";
import Link from "next/link";
import HomeLink from "../HomeLink";

function Page(props) {

    return (
        <div className='flex flex-col justify-center'>
            <p>If logged out try user@user.com : password</p>
            <HomeLink/>
            <SignInUpForm/>
        </div>
    );
}

export default Page;