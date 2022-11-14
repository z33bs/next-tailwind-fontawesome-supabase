import '../styles/globals.css'
import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {useState} from "react";
import {SessionContextProvider} from "@supabase/auth-helpers-react";

export default function MyApp({ Component, pageProps }) {
    //Allows us to use the custom hook useSupabaseClient() elsewhere in our app
    //which returns a SupabaseClient object
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())

    //Wrapping in the SessionContextProvider allows custom hook useSession()
    //which returns a Session object
    return (
      <SessionContextProvider
          supabaseClient={supabaseClient}
          initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    )
}