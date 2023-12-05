"use client";

import { useState } from "react";
import { Database } from "@/types_db";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";

interface SupabaseProviderProps {
	children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
	const [supabaseClient] = useState(() =>
		createClient<Database>(
			process.env.NEXT_PUBLIC_SUPABASE_URL || "",
			process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
		)
	);

	return (
		<SessionContextProvider supabaseClient={supabaseClient}>
			{children}
		</SessionContextProvider>
	);
};

export default SupabaseProvider;
