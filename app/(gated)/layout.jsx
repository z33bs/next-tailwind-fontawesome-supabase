import React from 'react';
import SignInOutButtonGroup from "../../supabase/SignInOutButtonGroup";
import SignInUpForm from "../../supabase/SignInUpForm";
import Link from "next/link";
import SupabaseGatingLayout from "../../supabase/SupabaseGatingLayout";

const component = (
    <div className={'flex flex-col items-center justify-center'}>
        <div className={'flex justify-between'}>
            <div/>
            <SignInOutButtonGroup/>
        </div>
        <div className={'p-6'}>Please sign in to view this page <br/> <Link className={'underline'} href={'/'}>Home</Link></div>
        <SignInUpForm/>
    </div>
)

async function Layout({children}) {
    return (
        <SupabaseGatingLayout isGatedComponent={component}>
            {children}
        </SupabaseGatingLayout>
    );
}

export default Layout;