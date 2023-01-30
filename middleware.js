import { NextResponse } from 'next/server'
import {supabaseMiddlewareRules} from "./supabase/depreciated/supabase-middleware";

//see https://nextjs.org/docs/advanced-features/middleware

export async function middleware(req) {
    const res = NextResponse.next()
    // console.log('middleware')
    // const supabaseRes = await supabaseMiddlewareRules(req, res)
    // supabaseRes?console.log('supabase middleware',supabaseRes):''
    // return supabaseRes ? supabaseRes : res

    return res
}