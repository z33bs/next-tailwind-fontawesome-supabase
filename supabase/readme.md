# Supabase pattern for App Directory
* Server components use supabase-server to get the supabase client
* Client components share a single instance of a supabase client via the 
useSupabase hook in the supabase provider
  * This hook is actually a wrapped useContext
  * The context provider is in the same file and also wrapped so it can be used in a server only component
* Automatic auth is achieved by the rules set forth in supabase-middleware which gets checked on any navigation
* A listener ensures server and browser instances are synced (access tokens match) it listens for changes in:
  * router
  * useSupabase instance
  * server access token