import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import {NextResponse} from "next/server";

//insert into '/middleware.js', e.g.
// import { NextResponse } from 'next/server'
// import {supabaseMiddlewareRules} from "../supabase/supabase-middleware";
//
// export async function middleware(req) {
//     const res = NextResponse.next()
//
//     const supabaseRes = await supabaseMiddlewareRules(req, res)
//
//     return supabaseRes ? supabaseRes : res
// }

const gatedContentPathPrefix = '/loggedIn'
const notSignedInRedirectUrl = '/bounced'

export const supabaseMiddlewareRules = async (req, res) => {
    const supabase = createMiddlewareSupabaseClient({req, res})

    const { data: {session} } = await supabase.auth.getSession()

    //Rule filters based on URL prefix
    if (req.nextUrl.pathname.startsWith(gatedContentPathPrefix)) {
        //redirect if not signed in
        if(!session) {
            // Auth condition not met, redirect to home page
            const redirectUrl = req.nextUrl.clone();
            redirectUrl.pathname = notSignedInRedirectUrl;
            redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
            return NextResponse.redirect(redirectUrl);
        }

        //todo learn how to apply rewrite to the URL to simplify url - appears not working on beta app dir
        return res
    }
}