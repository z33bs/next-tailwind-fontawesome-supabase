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
* I have developed the following to control access
  * all gated pages go into the hidden (gated) route
  * a smart layout with GatedProvider flags these pages and a trojan component will redirect pages if not logged in
  * could also modify trojan to become visible asking user to log in, maybe even presenting the login dialogue
* Alternative that didn't work too well was the automatic auth which is achieved by the rules set forth in supabase-middleware which gets checked on any navigation

IMPORTANT
* set prefetch=false when routing to gated pages from a place that will be accessed when user not logged in 