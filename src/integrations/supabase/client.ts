// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jhljwftlfkszfywmxbjn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpobGp3ZnRsZmtzemZ5d214YmpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMTAwODgsImV4cCI6MjA1Njc4NjA4OH0.K8vUyql1bITwVnx6XH6xSz7XaimEZdF8S_frI4o-Nxg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);