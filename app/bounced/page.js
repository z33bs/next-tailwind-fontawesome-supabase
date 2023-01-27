import React from "react";
import LoginForm from "../../supabase/LoginForm";
import Link from "next/link";
import HomeLink from "../HomeLink";

function Page(props) {

    return (
        <div className='flex flex-col justify-center'>
            <p>If logged out try user@user.com : password</p>
            <HomeLink/>
            <LoginForm/>
        </div>
    );
}

export default Page;