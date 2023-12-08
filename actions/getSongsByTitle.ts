import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types";

import getSongs from "./getSongs";

const getSongsByTitle = async (title: string,key: string, maxBPM:string, minBPM:string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  let all = (key === ("All major" || "All minor")) ? true : false;
  let minimum = Number(minBPM);
  let maximum = Number(maxBPM);

  console.log(key)
  if (!title && all) {
    console.log('took NO TITLE and ALL KEY route');
    //Supabase query-----------------------
    const { data, error } = await supabase
    .from('songs')
    .select('*')
    .gte('bpm',minimum)
    .lte('bpm',maximum)
    .order('created_at', { ascending: false })
    //---------------------------------------
    //Error message--------------------------
    if (error) {
      console.log(error.message);
    }
    //--------------------------------------
    //Final Data----------------------------
    return (data as any) || [];
    //--------------------------------------
    //--------------------------------------
  }
  
  if (!title && !all){
    console.log('took NO TITLE and KEY route');
    const { data, error } = await supabase
    .from('songs')
    .select('*')
    .gte('bpm',minimum)
    .lte('bpm',maximum)
    .eq('music_key', key)
    .order('created_at', { ascending: false })


    if (error) {
      console.log(error.message);
    }

    return (data as any) || [];
    ////////////////////////////

  }
  
  if(title && all){
    console.log('took TITLE and ALL KEY route');
    const { data, error } = await supabase
    .from('songs')
    .select('*')
    .ilike('title', `%${title}%`)
    .gte('bpm',minimum)
    .lte('bpm',maximum)
    .order('created_at', { ascending: false })


  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];

  }
  
  console.log('took TITLE and KEY route');
  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .ilike('title', `%${title}%`)
    .gte('bpm',minimum)
    .lte('bpm',maximum)
    .eq('music_key', key)
    .order('created_at', { ascending: false })


  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getSongsByTitle;