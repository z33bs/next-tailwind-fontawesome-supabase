import Head from 'next/head'
import {useSession, useSupabaseClient} from "@supabase/auth-helpers-react";
import {Auth, ThemeSupa} from "@supabase/auth-ui-react";
import Example from "./example";

export default function Home() {
    const session = useSession()
    const supabase = useSupabaseClient()

  return (
    <div>
      <Head>
        <title>SugarSnap</title>
        <meta name="description" content="The landing page for everyone" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
        {!session ? (
            <div className='flex justify-center'>
                <Auth supabaseClient={supabase} />
            </div>
        ) : (
            <Example session={session} supabaseClient={supabase}/>
        )}
    </div>
  )
}
