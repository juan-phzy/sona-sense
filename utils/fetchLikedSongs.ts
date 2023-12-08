export default async function fetchLikedSongs(userId: string): Promise<any[]> {
    try {
      const response = await fetch(`/api/getLikedSongs/${userId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const songs = await response.json();
      return songs;
    } catch (error) {
      console.error("Error fetching songs:", error);
      return [];
    }
  }
  