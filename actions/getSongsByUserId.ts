import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types";

const getSongsByUserId = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  const { data: sessionData, error: sessionError } = await supabase.auth.getUser();

  if (sessionError) {
    console.log(sessionError.message);
    return [];
  }

  if(sessionData.user){
     const { data, error } = await supabase
      .from('songs')
      .select('*')
      .eq('user_id', sessionData.user.id)
      .order('created_at', { ascending: false })

    if (error) {
      console.log(error.message);
    }

    return (data as any) || [];

  } else {
    console.log('session not read');
    return [];
  }

  
};

export default getSongsByUserId;