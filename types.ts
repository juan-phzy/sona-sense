export interface UserDetails {
  id: string;
  is_artist: boolean;
  username: string;
  first_name: string;
  last_name: string;
  avatar_url?: string;
}

export interface Song {
  id: string;
  user_id: string;
  artist: string;
  title: string;
  song_path: string;
  image_path: string;
  bpm: string;
  music_key: string;
}
