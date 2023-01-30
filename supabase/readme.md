# Supabase pattern for App Directory
* Server components use supabase-server to get the supabase client
* Client components share a single instance of a supabase client via the 
useSupabase hook in the supabase provider
  * This hook is actually a wrapped useContext
  * The context provider is in the same file and also wrapped so it can be used in a server only component
* A listener ensures server and browser instances are synced (access tokens match) it listens for changes in:
  * router
  * useSupabase instance
  * server access token
* The listener will refresh a route as soon as session changes... so when sign in or sign out the current page will refresh
* I have developed the following to control access
  * all gated pages go into the hidden (gated) route
  * a smart layout shows children as usual if signed in, otherwise shows a different component (custom) but probably saying gated and login options
* Old alternative is to wrap pages in a GatedProvider and a Trojan component that will redirect pages if not logged in
* The alternative that didn't work too well (Supabase example) was the automatic auth which is achieved by the rules set forth in supabase-middleware which gets checked on any navigation

IMPORTANT
* use following object destructuring for client-component supabase: const { supabase, session } = useSupabase();
* maybe set prefetch=false when routing to gated pages from a place that will be accessed when user not logged in