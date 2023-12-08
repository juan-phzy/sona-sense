import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

// You need to configure these environment variables in your Next.js app
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function GET(request, { params }) {
  try {
    const { userId } = params;

    // Validate userId
    if (!userId) {
      return new NextResponse(
        JSON.stringify({ message: "userId is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Fetch songs from Supabase
    const { data, error } = await supabase
      .from('liked_songs')
      .select('*, songs(*)')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

      

    if (error) {
      throw error;
    }

    const songData = data.map((item) => ({
        ...item.songs
      }))

    return new NextResponse(JSON.stringify(songData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
